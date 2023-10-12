import type { Ref } from 'vue';

interface OptionRaw {
  init?: boolean;
  params?: Record<string, unknown>;
  dataField?: string;
  currentField?: string;
  pageSizeField?: string;
  defaultCurrent?: number;
  defaultPageSize?: number;
  success?: Fn;
}

interface PaginationRaw {
  current: Ref<number>;
  pageSize: Ref<number>;
  total: Ref<number>;
}

interface usePaginationProp {
  data: Ref<Record<string, unknown>[]>;
  loading: Ref<boolean>;
  pagination: PaginationRaw;
  fetchData: Fn;
  onLoad: Fn;
  onCurrentChange: (...args: any[]) => any;
  onSizeChange: (...args: any[]) => any;
}

export function usePagination(apiFun: Fn, options: OptionRaw): usePaginationProp {
  let { params = {} } = options;
  const {
    init = true,
    dataField = 'list',
    currentField = 'current',
    pageSizeField = 'pageSize',
    defaultCurrent = 1,
    defaultPageSize = 10,
    success,
  } = options;

  const data = ref([]);
  const current = ref(defaultCurrent);
  const pageSize = ref(defaultPageSize);
  const total = ref(0);
  const loading = ref(false);

  const fetchData = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        loading.value = true;
        const p = {};
        p[currentField] = current.value;
        p[pageSizeField] = pageSize.value;
        const res = await apiFun({ ...params, ...p });
        total.value = res?.total ?? 0;
        if (dataField === 'none') {
          data.value = res;
        } else {
          const f = dataField.split(':');
          if (f.length > 1) {
            if (res.hasOwnProperty(f[0]) && res[f[0]].hasOwnProperty(f[1])) {
              data.value = res[f[0][f[1]]];
            } else {
              data.value = [];
              throw `response 中不存在 ${dataField} 属性！`;
            }
          } else {
            if (res.hasOwnProperty(dataField)) {
              data.value = res[dataField as string];
            } else {
              data.value = [];
              throw `response 中不存在 ${dataField} 属性！`;
            }
          }
        }
        resolve(res);
      } catch (error) {
        console.warn(error);
        reject(error);
      } finally {
        loading.value = false;
      }
    });
  };

  const onLoad = (p: any) => {
    current.value = 1;
    params = { ...params, ...p };
    fetchData().then(success);
  };

  const onCurrentChange = () => {
    fetchData().then(success);
  };

  const onSizeChange = () => {
    fetchData().then(success);
  };

  onMounted(() => {
    init && fetchData().then(success);
  });

  return {
    data,
    loading,
    pagination: {
      current,
      pageSize,
      total,
    },
    onLoad,
    fetchData,
    onCurrentChange,
    onSizeChange,
  };
}

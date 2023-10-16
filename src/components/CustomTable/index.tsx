import { ref, type PropType, type SetupContext } from 'vue';
import { ElTable, ElPagination } from 'element-plus';
import { tableColumnRender } from './CustomTableColumn';
import type { PaginationRaw, TableColumnProps } from './types';

const props = {
  formRef: {
    type: String,
    default: 'customTableRef',
  },
  data: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: [],
  },
  columns: {
    type: Array as PropType<TableColumnProps[]>,
    default: [],
  },
  pagination: {
    type: Object as PropType<PaginationRaw>,
    default: {
      total: 0,
      current: 1,
      pageSize: 10,
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  tableNativeProps: {
    type: Object as PropType<Record<string, unknown>>,
    default: {},
  },
  pageNativeProps: {
    type: Object as PropType<Record<string, unknown>>,
    default: {},
  },
};

export default defineComponent({
  name: 'CustomTable',
  props,
  emits: ['update:pagination', 'update:loading', 'onSizeChange', 'onCurrentChange'],
  setup(props, { slots, emit }: SetupContext) {
    const mPagination = ref({ ...props.pagination });

    const loading = computed({
      get: () => props.loading,
      set: (value) => {
        return emit('update:loading', value);
      },
    });

    watch(
      mPagination,
      (newVal) => {
        emit('update:pagination', newVal);
      },
      {
        immediate: true,
        deep: true,
      },
    );

    return () => (
      <>
        <ElTable {...props.tableNativeProps} data={props.data} v-loading={loading.value}>
          {tableColumnRender(props.columns, slots)}
        </ElTable>
        <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
          <ElPagination
            {...props.pageNativeProps}
            v-model:currentPage={mPagination.value.current}
            v-model:pageSize={mPagination.value.pageSize}
            total={mPagination.value.total}
            onSize-change={() => emit('onSizeChange')}
            onCurrent-change={() => emit('onCurrentChange')}
          ></ElPagination>
        </div>
      </>
    );
  },
});

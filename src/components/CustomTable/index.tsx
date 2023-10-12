import { ref, renderSlot, type PropType, type SetupContext } from 'vue';
import { ElTable, ElPagination, ElTableColumn } from 'element-plus';
import { isFunction, isString } from '/@/utils/is';
import type { PaginationProps, TableColumnProps } from './types';

const props = {
  formRef: {
    type: String,
    default: 'customTableRef',
  },
  data: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array as PropType<TableColumnProps[]>,
    default: [],
  },
  pagination: {
    type: Object as PropType<PaginationProps>,
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
  //   currentPage: {
  //     type: Number,
  //     default: 1,
  //   },
  //   pageSize: {
  //     type: Number,
  //     default: 10,
  //   },
  //   pageSizes: {
  //     type: Array as PropType<number[]>,
  //     default: [5, 10, 30, 50],
  //   },
  //   layout: {
  //     type: String,
  //     default: 'total, prev, pager, next, sizes, jumper',
  //   },
  //   total: {
  //     type: Number,
  //     default: 0,
  //   },
  //   background: {
  //     type: Boolean,
  //     default: true,
  //   },
};

const tableColumnRender = (column: TableColumnProps[], vSlots: any) => {
  return column.map((i) => {
    if (i.customRender) {
      let slots: any;
      if (isFunction(i.customRender)) {
        slots = { default: i.customRender };
      }

      if (isString(i.customRender)) {
        slots = {
          default: (scope: any) =>
            renderSlot(vSlots, i.customRender as string, { row: scope.row, scope }),
        };
      }

      return <ElTableColumn {...i} v-slots={slots} />;
    }

    return <ElTableColumn {...i} />;
  });
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

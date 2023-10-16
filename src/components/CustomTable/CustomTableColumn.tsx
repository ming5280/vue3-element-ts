import { defineComponent, renderSlot, type PropType, type SetupContext } from 'vue';
import { ElTableColumn } from 'element-plus';
import { isFunction, isString } from '/@/utils/is';
import { TableColumnProps } from './types';

export const tableColumnRender = (column: TableColumnProps[], vSlots: any) => {
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

const props = {
  column: {
    type: Array as PropType<TableColumnProps[]>,
    default: [],
  },
};

export default defineComponent({
  name: 'CustomTableColumn',
  props,
  setup(props, { slots }: SetupContext) {
    return () => tableColumnRender(props.column, slots);
  },
});

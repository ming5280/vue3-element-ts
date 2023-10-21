import { defineComponent, renderSlot, type PropType, type SetupContext } from 'vue';
import { ElTableColumn } from 'element-plus';
import { isFunction, isString } from '/@/utils/is';
import { TableColumnProps } from './types';

export const tableColumnRender = (column: TableColumnProps[], context: SetupContext) => {
  return column.map((i) => {
    if (i.customRender) {
      const slots: Record<'default', string | Fn> = { default: '' };

      // render
      if (isFunction(i.customRender)) {
        slots.default = i.customRender;
      }

      // slot
      if (isString(i.customRender)) {
        slots.default = (scope: Record<string, any>) =>
          renderSlot(context.slots, i.customRender as string, { row: scope.row, scope });
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
  setup(props, context) {
    return () => tableColumnRender(props.column, context);
  },
});

import { type PropType } from 'vue';
import { ElTable, ElPagination } from 'element-plus';

const props = {
  formRef: {
    type: String,
    default: 'customTableRef',
  },
  data: {
    type: Array,
    default: [],
  },
  pagination: {
    type: Object as PropType<Record<string, unknown>>,
  },
};

export default defineComponent({
  name: 'CustomTable',
  props,
  setup(props) {
    return () => (
      <>
        <ElTable data={props.data}></ElTable>
        <ElPagination {...props.pagination}></ElPagination>
      </>
    );
  },
});

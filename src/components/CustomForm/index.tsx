import { ref, toRefs, defineComponent, renderSlot, type PropType, type SetupContext } from 'vue';
import { ElForm, ElFormItem, ElRow, ElCol } from 'element-plus';
import type { RowProps, FormItemProps, LabelPosition } from './types';
import formItemRender from './CusomFormItem';
import { pick } from 'lodash-es';

const props = {
  formRef: {
    type: String,
    default: 'customFormRef',
  },
  model: {
    type: Object as PropType<Record<string, unknown>>,
    default: {},
  },
  rowProps: {
    type: Object as PropType<RowProps>,
    default: () => ({
      gutter: 24,
    }),
  },
  formData: {
    type: Array as PropType<FormItemProps[]>,
    default: () => [],
  },
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: 'right',
  },
  labelWidth: {
    type: String,
    default: '150px',
  },
};

const elFormItemPropsKeys = [
  'prop',
  'label',
  'labelWidth',
  'required',
  'rules',
  // 'error',
  // 'showMessage',
  // 'inlineMessage',
  // 'size',
  // 'for',
  // 'validateStatus',
];

// col 渲染
const colRender = (props: any, slots: any) => {
  const { model, formData } = props;

  return formData.map((i: FormItemProps) => {
    const formItemProps = { labelWidth: props.labelWidth, ...pick(i, elFormItemPropsKeys) };
    return (
      <ElCol {...i.colProps}>
        <ElFormItem {...formItemProps}>
          {i.formItemType === 'slot'
            ? renderSlot(slots, i.prop, { text: model[i.prop], props: { ...i } })
            : formItemRender(i, model)}
        </ElFormItem>
      </ElCol>
    );
  });
};

export default defineComponent({
  name: 'CustomForm',
  props,
  setup(props, { slots, expose }: SetupContext) {
    const customFormRef = ref();
    const { model } = toRefs(props);

    // 表单校验
    const validate = async () => {
      if (!customFormRef.value) return;
      return await customFormRef.value.validate();
    };

    // 表单重置
    const resetFields = () => {
      if (!customFormRef.value) return;
      customFormRef.value.resetFields();
    };

    // 接口
    expose({ validate, resetFields });

    return () => (
      <ElForm ref={customFormRef} model={model} labelPosition={props.labelPosition}>
        <ElRow {...props.rowProps}>
          {colRender(props, slots)}
          <ElCol>
            <ElFormItem labelWidth={props.labelWidth}>{renderSlot(slots, 'action')}</ElFormItem>
          </ElCol>
        </ElRow>
      </ElForm>
    );
  },
});

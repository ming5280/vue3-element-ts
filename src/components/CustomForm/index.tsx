import { ref, defineComponent, renderSlot, type PropType, type SetupContext } from 'vue';
import { ElForm, ElFormItem, ElRow, ElCol } from 'element-plus';
import type { RowProps, FormItemProps, LabelPosition } from './types';
import formItemRender from './CusomFormItem';
import { pick } from 'lodash-es';

const props = {
  formRef: {
    type: String,
    default: 'customFormRef',
  },
  modelValue: {
    type: Object as PropType<Record<string, unknown>>,
    default: () => ({}),
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

export default defineComponent({
  name: 'CustomForm',
  props,
  emits: ['update:modelValue'],
  setup(props, { slots, emit, expose }: SetupContext) {
    const customFormRef = ref();

    const mValue = ref({ ...props.modelValue });

    // 1. watch做法
    watch(
      mValue,
      (newVal) => {
        emit('update:modelValue', newVal);
      },
      {
        immediate: true,
        deep: true,
      },
    );

    // 2.computed 做法
    // const mValue = computed({
    //   get: () => reactive({ ...toRefs(props.modelValue) }),
    //   set: (value) => {
    //     return emit('update:modelValue', value);
    //   },
    // });

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

    // col 渲染
    const colRender = () => {
      return props.formData.map((i: FormItemProps) => {
        const formItemProps = { labelWidth: props.labelWidth, ...pick(i, elFormItemPropsKeys) };
        return (
          <ElCol {...i.colProps}>
            <ElFormItem {...formItemProps}>
              {i.formItemType === 'slot'
                ? renderSlot(slots, i.prop, { text: mValue.value[i.prop], props: { ...i } })
                : formItemRender(i, mValue.value)}
            </ElFormItem>
          </ElCol>
        );
      });
    };

    return () => (
      <ElForm ref={customFormRef} model={mValue} labelPosition={props.labelPosition}>
        <ElRow {...props.rowProps}>
          {colRender()}
          <ElCol>
            <ElFormItem labelWidth={props.labelWidth}>{renderSlot(slots, 'action')}</ElFormItem>
          </ElCol>
        </ElRow>
      </ElForm>
    );
  },
});

import {
  ElInput,
  ElInputNumber,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElRadio,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup,
} from 'element-plus';
import type { FormItemProps, RenderFn } from './types';

/**
 * @description: 创建默认不可编辑渲染内容
 */
const createDefualtRender = (formItem: FormItemProps, model: object) => {
  return <span>{model[formItem.prop]}</span>;
};

/**
 * @description: 创建input渲染内容
 */
const createInputRender = (formItem: FormItemProps, model: object) => {
  return <ElInput v-model={model[formItem.prop]} clearable {...formItem}></ElInput>;
};

/**
 * @description: 创建数字input渲染内容
 */
export const createInputNumberRender = (formItem: FormItemProps, model: object) => {
  return <ElInputNumber v-model={model[formItem.prop]} {...formItem} />;
};

/**
 * @description: 创建select渲染内容
 */
export const createSelectRender = (formItem: FormItemProps, model: object) => {
  const options = formItem?.options?.length
    ? formItem.options.map((item) => {
        return <ElOption {...item} />;
      })
    : null;
  return (
    <ElSelect v-model={model[formItem.prop]} teleported={false} clearable {...formItem}>
      {options}
    </ElSelect>
  );
};

/**
 * @description: 创建DateTimePicker渲染内容
 */
export const createDatePickerRender = (formItem: FormItemProps, model: object) => {
  return (
    <ElDatePicker
      v-model={model[formItem.prop]}
      type="datetime"
      value-format="YYYY-MM-DD HH:mm:ss"
      format="YYYY-MM-DD HH:mm:ss"
      teleported={false}
      clearable
      {...formItem}
    />
  );
};

/**
 * @description: 创建radio渲染内容
 */
export const createRadioRender = (formItem: FormItemProps, model: object) => {
  const options = formItem?.options?.length
    ? formItem.options.map((item) => {
        return <ElRadio {...item}>{item.label}</ElRadio>;
      })
    : null;
  return (
    <ElRadioGroup v-model={model[formItem.prop]} {...formItem}>
      {options}
    </ElRadioGroup>
  );
};

/**
 * @description: 创建checkbox渲染内容
 */
export const createCheckboxRender = (formItem: FormItemProps, model: object) => {
  const options = formItem?.options?.length
    ? formItem.options.map((item) => {
        return <ElCheckbox {...item}>{item.label}</ElCheckbox>;
      })
    : null;
  return (
    <ElCheckboxGroup v-model={model[formItem.prop]} {...formItem}>
      {options}
    </ElCheckboxGroup>
  );
};

const componentMap = new Map<string, RenderFn>();

// set Map
componentMap.set('default', createDefualtRender);
componentMap.set('input', createInputRender);
componentMap.set('inputNumber', createInputNumberRender);
componentMap.set('select', createSelectRender);
componentMap.set('date', createDatePickerRender);
componentMap.set('radio', createRadioRender);
componentMap.set('checkbox', createCheckboxRender);

// 渲染对应 form 项
export default function (formItem: FormItemProps, model: object) {
  return componentMap.get(formItem.formItemType)!(formItem, model);
}

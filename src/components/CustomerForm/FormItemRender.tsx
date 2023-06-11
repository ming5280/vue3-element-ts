import {
  ElInput,
  ElSelect,
  ElOption,
  ElInputNumber,
  //   ElTimePicker,
  ElDatePicker,
  ElRadio,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup,
} from 'element-plus';
import type { FormItemProps } from './type';

/**
 * @description: 创建默认不可编辑渲染内容
 */
export const createDefualtRender = (formItem: FormItemProps, model: object): any => {
  return <span>{model[formItem.field]}</span>;
};

/**
 * @description: 创建input渲染内容
 */
export const createInputRender = (formItem: FormItemProps, model: object): any => {
  return (
    <ElInput
      v-model={model[formItem.field]}
      type={formItem.inputType ?? 'text'}
      show-password={formItem.inputType === 'password'}
      clearable
      placeholder={formItem.placeholder ?? ''}
      autosize={
        formItem.inputType === 'textarea' ? formItem.autosize ?? { minRows: 3, maxRows: 6 } : false
      }
      disabled={formItem.disabled ?? false}
      style={formItem.style ?? { width: '100%' }}
      {...formItem.elProps}
    ></ElInput>
  );
};

/**
 * @description: 创建数字输入框渲染内容
 */
export const createInputNumberRender = (formItem: FormItemProps, model: object) => {
  return (
    <ElInputNumber
      v-model={model[formItem.field]}
      placeholder={formItem.placeholder ?? ''}
      clearable
      style={formItem.style ?? { width: '100%' }}
      {...formItem.elProps}
    />
  );
};

/**
 * @description: 创建select渲染内容
 */
export const createSelectRender = (formItem: FormItemProps, model: object): any => {
  const options = formItem?.options?.length
    ? formItem.options.map((item) => {
        return <ElOption {...item} />;
      })
    : null;
  return (
    <ElSelect
      v-model={model[formItem.field]}
      filterable
      clearable
      placeholder={formItem.placeholder ?? ''}
      style={formItem.style ?? { width: '100%' }}
      {...formItem.elProps}
    >
      {options}
    </ElSelect>
  );
};

/**
 * @description: 创建DateTimePicker渲染内容
 */
export const createDatePickerRender = (formItem: FormItemProps, model: object): any => {
  return (
    <ElDatePicker
      v-model={model[formItem.field]}
      type={formItem.dateType ?? 'datetime'}
      value-format={formItem.valueFormat ?? 'YYYY-MM-DD HH:mm:ss'}
      format={formItem.format ?? 'YYYY-MM-DD HH:mm:ss'}
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder={formItem.placeholder ?? ''}
      style={formItem.style ?? { width: '100%' }}
      {...formItem.elProps}
    />
    // 能自定义：日期区域选择分为两个选择框  选择日期和时间(ElTimePicker)分为两个选择框  to do

    // const dateTimePickerType = 'alone'; // merged | alone

    // <div>
    //   <span style={lineHeight: '32px',textAlign: 'center',fontSize: '14px';}>-</span>
    //   <el-time-picker
    //     v-model="ruleForm.date2"
    //     label="Pick a time"
    //     placeholder="Pick a time"
    //     style="width: 100%"
    //   />
    // </div>
  );
};

/**
 * @description: 创建radio渲染内容
 */
export const createRadioRender = (formItem: FormItemProps, model: object): any => {
  const options = formItem?.options?.length
    ? formItem.options.map((item) => {
        return <ElRadio label={item.value}>{item.label}</ElRadio>;
      })
    : null;
  return (
    <ElRadioGroup v-model={model[formItem.field]} {...formItem.elProps}>
      {options}
    </ElRadioGroup>
  );
};

/**
 * @description: 创建checkbox渲染内容
 */
export const createCheckboxRender = (formItem: FormItemProps, model: object): any => {
  const options = formItem?.options?.length
    ? formItem.options.map((item) => {
        return (
          <ElCheckbox label={item.value} disabled={item.disabled ?? false}>
            {item.label}
          </ElCheckbox>
        );
      })
    : null;
  return (
    <ElCheckboxGroup v-model={model[formItem.field]} {...formItem.elProps}>
      {options}
    </ElCheckboxGroup>
  );
};

/**
 * @description: 创建自定义渲染内容
 */
export const createCustomerRender = (formItem: FormItemProps, model: object): any => {
  return formItem.customRender && formItem.customRender(formItem, model);
};

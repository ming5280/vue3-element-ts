import type { FormItemRule } from 'element-plus';

type FormItemType =
  | 'input'
  | 'inputNumber'
  | 'select'
  | 'switch'
  | 'radio'
  | 'date'
  | 'time'
  | 'checkbox'
  | 'daterange'
  | 'fileUpload'
  | 'imageUpload'
  | 'customer';

type InputType = 'text' | 'textarea' | 'password';

interface FormOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface Autosize {
  minRows: number;
  maxRows: number;
}

export interface FormItemProps {
  type: FormItemType;
  inputType?: InputType;
  label?: string;
  field: string;
  rules?: FormItemRule | FormItemRule[];
  placeholder?: any;
  options?: FormOption[];
  otherOptions?: any;
  isHidden?: boolean;
  span?: Number;
  autosize?: boolean | Autosize;
  disabled?: boolean;
  style?: object;
  elProps?: any;
  dateType?: string; // year | month | date | dates | datetime | week | datetimerange | daterange | monthrange
  format?: string;
  valueFormat?: string;
  slotName?: string;
  customRender?: Function;
  // labelWidth?: string | number;
}

// export interface Form {
//   model: any;
//   inline: boolean;
//   labelPosition: LabelPosition;
//   formItems: FormItem[];
// }

export interface CustomFormProps {
  ref: string;
  model: Record<string, unknown>;
}
type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
type Align = 'top' | 'middle' | 'bottom';
export type LabelPosition = 'left' | 'right' | 'top';

export interface RowProps {
  gutter?: number;
  justify: Justify;
  align: Align;
}

interface ColProps {
  span: number;
}

export interface FormItemProps {
  formItemType: string;
  prop: string;
  label: string;
  colProps?: ColProps;
  options?: IOptions<number | string>;
  placeholder?: string;
  rules?: any;
  type?: any;
}

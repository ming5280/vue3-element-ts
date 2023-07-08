import { defineComponent, type PropType } from 'vue';
import type { FormItemProps } from './type';
import {
  createDefualtRender,
  createInputRender,
  createSelectRender,
  createInputNumberRender,
  createDatePickerRender,
  createRadioRender,
  createCheckboxRender,
  createFileUploadRender,
  createImageUploadRender,
  // createCustomerRender,
} from './FormItemRender';

const componentMap = new Map<string, any>();

componentMap.set('default', createDefualtRender);
componentMap.set('input', createInputRender);
componentMap.set('inputNumber', createInputNumberRender);
componentMap.set('select', createSelectRender);
componentMap.set('date', createDatePickerRender);
componentMap.set('radio', createRadioRender);
componentMap.set('checkbox', createCheckboxRender);
componentMap.set('fileUpload', createFileUploadRender);
componentMap.set('imageUpload', createImageUploadRender);
// componentMap.set('customer', createCustomerRender);

const props = {
  formItem: {
    type: Object as PropType<FormItemProps>,
    default: () => ({}),
  },
  model: {
    type: Object,
  },
  editable: {
    type: Boolean,
  },
};

export default defineComponent({
  name: 'FormItem',
  props,
  setup(props) {
    return () =>
      props.editable
        ? componentMap.get('default')(props.formItem, props.model)
        : componentMap.get(props.formItem.type)(props.formItem, props.model);
  },
});

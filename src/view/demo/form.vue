<script setup lang="ts">
  import CustomerForm from '/@/components/CustomerForm/index.vue';
  import type { FormItemProps } from '/@/components/CustomerForm/type';
  const data = reactive<FormItemProps[]>([
    {
      type: 'input',
      inputType: 'text',
      label: 'Activity name',
      field: 'name',
      placeholder: '请输入姓名',
      //   disabled: true,
      rules: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur',
        },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      span: 24,
    },
    {
      type: 'select',
      label: 'Activity zone',
      field: 'region',
      placeholder: 'Activity zone',
      options: [
        {
          label: 'Zone one',
          value: 'shanghai',
        },
        {
          label: 'Zone two',
          value: 'beijing',
        },
      ],
      span: 24,
    },
    {
      type: 'inputNumber',
      label: 'Activity count',
      field: 'count',
      placeholder: 'Activity count',
      span: 24,
      elProps: {
        controlsPosition: 'right',
      },
    },
    {
      type: 'date',
      label: 'Activity date',
      field: 'date',
      dateType: 'datetime',
      placeholder: 'Activity date',
      span: 24,
    },
    {
      type: 'radio',
      label: 'Resources',
      field: 'resource',
      options: [
        { label: 'Sponsorship', value: '1' },
        { label: 'Venue', value: '2' },
      ],
      span: 24,
    },
    {
      type: 'checkbox',
      label: 'Activity type',
      field: 'type',
      options: [
        { label: 'Online activities', value: '1', disabled: true },
        { label: 'Promotion activities', value: '2' },
        { label: 'Offline activities', value: '3' },
        { label: 'Promotion activities', value: '4' },
        { label: 'Simple brand exposure', value: '5' },
      ],
      span: 24,
    },
    {
      type: 'input',
      inputType: 'textarea',
      label: 'Activity form',
      field: 'desc',
      placeholder: 'Activity form',
      span: 24,
    },
    {
      type: 'fileUpload',
      label: 'File Upload',
      field: 'fileList',
      span: 24,
    },
    {
      type: 'imageUpload',
      label: 'Image Upload',
      field: 'imageList',
      span: 24,
    },
    {
      type: 'customer',
      slotName: 'test',
      label: 'slot',
      field: 'test',
      span: 24,
    },
  ]);
  const model = reactive({
    name: 'Hello',
    region: '',
    count: 25,
    date: '2023-06-11 00:00:00',
    resource: '',
    type: [],
    desc: '',
    fileList: [
      {
        name: 'element-plus-logo.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
      },
    ],
    imageList: [
      {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      },
    ],
    test: '1111',
  });

  const formRef = ref();

  const submitForm = () => {
    if (formRef.value.validate()) {
      console.log(toRaw(model));
    }
  };

  const resetForm = () => {
    formRef.value.resetFields();
  };
</script>

<template>
  <div class="wrap">
    <CustomerForm ref="formRef" :model="model" :form="data">
      <template #test="{ text }">
        <span>{{ text }}</span>
      </template>
      <template #action>
        <el-button type="primary" @click="submitForm()">Create</el-button>
        <el-button @click="resetForm()">Reset</el-button>
      </template>
    </CustomerForm>
  </div>
</template>

<style scoped>
  .wrap {
    margin: 30px auto;
    width: 600px;
    height: auto;
  }
</style>

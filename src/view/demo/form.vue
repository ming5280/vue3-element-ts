<script setup lang="ts">
  import CustomerForm from '/@/components/CustomForm';
  const data = ref([
    {
      formItemType: 'input',
      prop: 'name',
      label: 'Activity name',
      placeholder: 'Activity name',
      rules: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur',
        },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
    },
    {
      formItemType: 'select',
      prop: 'region',
      label: 'Activity zone',
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
    },
    {
      formItemType: 'inputNumber',
      prop: 'count',
      label: 'Activity count',
      placeholder: 'Activity count',
    },
    {
      formItemType: 'date',
      prop: 'date',
      label: 'Activity date',
      type: 'datetime',
      placeholder: 'Activity date',
    },
    {
      formItemType: 'radio',
      prop: 'resource',
      label: 'Resources',
      options: [
        { label: 'Sponsorship', value: '1' },
        { label: 'Venue', value: '2' },
      ],
    },
    {
      formItemType: 'checkbox',
      prop: 'type',
      label: 'Activity type',
      options: [
        { label: 'Online activities', value: '1', disabled: true },
        { label: 'Promotion activities', value: '2' },
        { label: 'Offline activities', value: '3' },
        { label: 'Promotion activities', value: '4' },
        { label: 'Simple brand exposure', value: '5' },
      ],
    },
    {
      formItemType: 'input',
      prop: 'desc',
      type: 'textarea',
      label: 'Activity form',
      placeholder: 'Activity form',
    },
    {
      formItemType: 'slot',
      prop: 'test',
      label: 'slot',
    },
  ]);

  const model = ref({
    name: '',
    region: '',
    count: 0,
    date: '',
    resource: '',
    type: [],
    desc: '',
    test: '1111',
  });
  const formRef = ref();

  const submitForm = () => {
    const valid = formRef.value.validate();
    if (valid) {
      console.log(model.value);
    } else {
      return false;
    }
  };

  const resetForm = () => {
    formRef.value.resetFields();
  };
</script>

<template>
  <div class="wrap">
    <CustomerForm ref="formRef" v-model="model" :formData="data">
      <template #test="scope">
        {{ scope.text }}
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

<script setup lang="ts">
  import CustomerForm from '/@/components/CustomForm';
  const data = reactive([
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
  const model = reactive({
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
      console.log(toRaw(model));
    } else {
      return false;
    }
  };

  const resetForm = () => {
    formRef.value.resetFields();
  };

  const tableData = ref([
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ]);

  const deleteRow = (index: number) => {
    tableData.value.splice(index, 1);
  };
</script>

<template>
  <div class="wrap">
    <CustomerForm ref="formRef" :model="model" :formData="data">
      <template #test="scope">
        {{ scope.text }}
      </template>
      <template #action>
        <el-button type="primary" @click="submitForm()">Create</el-button>
        <el-button @click="resetForm()">Reset</el-button>
      </template>
    </CustomerForm>

    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
  .wrap {
    margin: 30px auto;
    width: 600px;
    height: auto;
  }
</style>

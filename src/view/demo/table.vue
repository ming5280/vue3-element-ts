<script setup lang="ts">
  import CustomTable from '/@/components/CustomTable';
  import CustomSpace from '/@/components/CustomSpace/index.vue';
  import { usePagination } from '/@/hooks/usePagination';
  import { getUserList } from '/@/api/demo/user';

  const { data, loading, pagination, onSizeChange, onCurrentChange } = usePagination(getUserList, {
    params: { id: 1 },
    dataField: 'temp:list',
    currentField: 'current',
    pageSizeField: 'pageSize',
  });
  const { current, pageSize } = pagination;

  const columns = ref([
    {
      prop: 'number',
      label: '序号',
      align: 'center',
      customRender: 'number',
    },
    {
      prop: 'name',
      label: '姓名',
      align: 'center',
      formatter: (row: any, column: any) => row[column.property] ?? '-',
    },
    {
      prop: 'age',
      label: '年龄',
      align: 'center',
      formatter: (row: any, column: any) => row[column.property] ?? '-',
    },
    {
      prop: 'gender',
      label: '性别',
      align: 'center',
      formatter: (row: any, column: any) => row[column.property] ?? '-',
    },
    {
      prop: 'address',
      label: '地址',
      align: 'center',
      customRender: 'address',
    },
    {
      prop: 'action',
      label: '操作',
      align: 'center',
      customRender: 'action',
    },
  ]);

  const deleteRow = (index: number) => {
    // tableData.value.splice(index, 1);
    console.log(index);
  };
</script>

<template>
  <div class="wrap">
    <CustomTable
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      :tableNativeProps="{ border: true }"
      :pageNativeProps="{
        pageSzies: [5, 10, 30, 50],
        layout: 'total, prev, pager, next, sizes, jumper',
        background: true,
      }"
      @on-size-change="onSizeChange"
      @on-current-change="onCurrentChange"
    >
      <template #number="{ scope }">
        {{ (current - 1) * pageSize + scope.$index + 1 }}
      </template>
      <template #address="{ row }">
        <span>{{ row.address }}</span>
      </template>
      <template #action="{ scope }">
        <CustomSpace>
          <el-link icon="Edit">编辑</el-link>
          <el-link icon="Delete" @click.prevent="deleteRow(scope.$index)">删除</el-link>
        </CustomSpace>
      </template>
    </CustomTable>
  </div>
</template>

<style scoped>
  .wrap {
    margin: 30px auto;
    width: 1000px;
    height: auto;
  }
</style>

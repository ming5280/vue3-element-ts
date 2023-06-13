<template>
  <div class="zhzg-table">
    <el-table
      :data="tableData"
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="Date" width="180" align="center" />
      <el-table-column prop="name" label="Name" width="180" align="center" />
      <el-table-column prop="address" label="Address" align="center" />
    </el-table>
  </div>
</template>
<script setup lang="ts">
  const headerCellStyle = {
    background: '#faf5f5',
    height: '50px',
    lineHeight: '50px',
    fontSize: '14px',
    color: '#730101',
    fontweight: '600',
  };
  const cellStyle = {
    height: '50px',
    lineHeight: '50px',
    fontSize: '14px',
    color: '#2E2E2E',
    fontWeight: '400',
  };
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];
</script>
<style lang="scss" scoped>
  .zhzg-table {
    :deep(.el-table th.el-table__cell.is-leaf) {
      border-bottom: 1px solid #dabdbd;
      border-right: 1px solid #dabdbd;
      background-color: #faf5f5;
    }
    :deep(.el-table td.el-table__cell) {
      border-bottom: 1px solid #dabdbd;
      border-right: 1px solid #dabdbd;
    }
    // :deep(.el-table__inner-wrapper::before) {
    //   background-color: transparent;
    // }
    :deep(.el-table__inner-wrapper::after) {
      background-color: transparent;
    }
    :deep(.el-table__border-left-patch) {
      background-color: transparent;
    }
    // :deep(.el-table--border::after) {
    //   background-color: transparent;
    // }
    :deep(.el-table) {
      border-radius: 10px;
      border: 1px solid #dabdbd;
    }
  }
</style>

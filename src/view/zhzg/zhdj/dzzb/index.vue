<template>
  <div>
    <el-table
      :data="tableData"
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
      border
      style="width: 100%"
    >
      <el-table-column prop="dzzmc" label="党组织名称" width="180" align="center" />
      <el-table-column prop="dzbsj" label="党支部书记" width="180" align="center" />
      <el-table-column prop="fsj" label="副书记" align="center" />
      <el-table-column prop="zzwy" label="组织委员" align="center" />
      <el-table-column prop="xcwy" label="宣传委员" align="center" />
      <el-table-column prop="jjwy" label="纪检委员" align="center" />
      <el-table-column prop="bmwy" label="保密委员" align="center" />
      <el-table-column prop="qnwy" label="青年委员" align="center" />
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
      dzzmc: '指挥处',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '政治处',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '一支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '二支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '三支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '四支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '五支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '六支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '七支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '八支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
    {
      dzzmc: '九支队',
      dzbsj: '民警*',
      fsj: '民警*',
      zzwy: '民警*',
      xcwy: '民警*',
      jjwy: '民警*',
      bmwy: '民警*',
      qnwy: '民警*',
    },
  ];
</script>
<style lang="scss" scoped src="/@/styles/zhzg/z-form.scss"></style>
<!-- <style lang="scss" scoped src="/@/styles/zhzg/z-pagination.scss"></style> -->
<style lang="scss" scoped src="/@/styles/zhzg/z-table.scss"></style>
<style scoped></style>

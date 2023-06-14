<template>
  <div>
    <el-form-item label="党组织">
      <el-select v-model="form.region" placeholder="请选择党组织" :teleported="false" clearable>
        <el-option label="中共上海市公安局刑侦总队指挥处支部委员会" value="1" />
      </el-select>
    </el-form-item>
    <el-table
      :data="tableData"
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
      border
      style="width: 100%"
    >
      <el-table-column prop="dzzmc" label="党组织名称" width="180" align="center" />
      <el-table-column prop="xm" label="姓名" width="180" align="center" />
      <el-table-column prop="dnzw" label="党内职位" align="center" />
      <el-table-column prop="zzmm" label="政治面貌" align="center" />
      <el-table-column prop="szbm" label="所在部门" align="center" />
      <el-table-column prop="jh" label="警号" align="center" />
      <el-table-column prop="xb" label="性别" align="center" />
      <el-table-column prop="rdrq" label="入党日期" align="center" />
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
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '政治处',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '一支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '二支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '三支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '四支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '五支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '六支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '七支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '八支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
    {
      dzzmc: '九支队',
      xm: '民警1',
      dnzw: '保密委员',
      zzmm: '党员',
      szbm: '指挥处',
      jh: '738372',
      xb: '男',
      rdrq: '2018-08-15',
    },
  ];
  const form = reactive({
    region: '',
  });
</script>
<style lang="scss" scoped src="/@/styles/zhzg/z-form.scss"></style>
<!-- <style lang="scss" scoped src="/@/styles/zhzg/z-pagination.scss"></style> -->
<style lang="scss" scoped src="/@/styles/zhzg/z-table.scss"></style>
<style scoped></style>

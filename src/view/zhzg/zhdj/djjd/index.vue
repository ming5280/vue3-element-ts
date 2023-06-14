<template>
  <div>
    <div class="form">
      <el-form-item>
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="开始日期"
          style="width: 150px"
          :teleported="false"
        />
        <span style="display: inline-block; color: #730101; margin: 0 15px">至</span>
        <el-date-picker
          v-model="form.date2"
          type="date"
          placeholder="结束日期"
          style="width: 150px"
          :teleported="false"
        />
      </el-form-item>
      <el-form-item>
        <el-button>录入</el-button>
        <el-button type="primary">编辑</el-button>
      </el-form-item>
    </div>
    <el-table
      :data="tableData"
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
      border
      style="width: 100%"
    >
      <el-table-column prop="dzzmc" label="党组织名称" width="180" align="center" />
      <el-table-column prop="zbwyh" label="支部委员会" width="180" align="center" />
      <el-table-column prop="dxzh" label="党小组会" align="center" />
      <el-table-column prop="dydh" label="党员大会" align="center" />
      <el-table-column prop="dk" label="党课" align="center" />
      <el-table-column prop="jd" label="进度" align="center">
        <template #default="{ row }">
          <el-progress
            :stroke-width="22"
            :percentage="row.jd"
            :color="row.jd === 100 ? '#007BF5' : '#FF9900'"
          >
            <template #default="{ percentage }">
              <p style="font-size: 14px; color: #730101">{{ percentage }}%</p>
            </template>
          </el-progress>
        </template>
      </el-table-column>
      <el-table-column prop="action" label="操作" align="center">
        <template #default="scope">
          <el-link href="javascript:;" @click.prevent="detail(scope)">详情</el-link>
        </template>
      </el-table-column>
    </el-table>
    <DetailDrawer />
  </div>
</template>

<script setup lang="ts">
  import DetailDrawer from './detailDrawer/index.vue';
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
      zbwyh: '10',
      dxzh: '2',
      dydh: '1',
      dk: '1',
      jd: 80,
    },
    {
      dzzmc: '政治处',
      zbwyh: '10',
      dxzh: '2',
      dydh: '1',
      dk: '1',
      jd: 100,
    },
    {
      dzzmc: '一支队',
      zbwyh: '10',
      dxzh: '2',
      dydh: '1',
      dk: '1',
      jd: 100,
    },
    {
      dzzmc: '二支队',
      zbwyh: '10',
      dxzh: '2',
      dydh: '1',
      dk: '1',
      jd: 100,
    },
    {
      dzzmc: '三支队',
      zbwyh: '10',
      dxzh: '2',
      dydh: '1',
      dk: '1',
      jd: 100,
    },
    {
      dzzmc: '四支队',
      zbwyh: '10',
      dxzh: '2',
      dydh: '1',
      dk: '1',
      jd: 100,
    },
  ];
  const form = ref({
    date1: '',
    date2: '',
  });
  const detail = (scope) => {
    console.log(scope);
  };
</script>
<style lang="scss" scoped src="/@/styles/zhzg/z-form.scss"></style>
<!-- <style lang="scss" scoped src="/@/styles/zhzg/z-pagination.scss"></style> -->
<style lang="scss" scoped src="/@/styles/zhzg/z-table.scss"></style>
<style lang="scss" scoped>
  .form {
    display: flex;
    justify-content: space-between;
  }
</style>

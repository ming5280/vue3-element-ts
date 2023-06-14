<template>
  <div>
    <div v-if="!isDetail">
      <el-form-item label="指挥处">
        <div class="tab">
          <ul>
            <li class="active">全部</li>
            <li>党建活动</li>
            <li>两优一先</li>
            <li>教育训练</li>
            <li>团圆青年</li>
            <li>工作述职</li>
            <li>文体煖警</li>
          </ul>
        </div>
      </el-form-item>
      <div class="form">
        <el-form-item label="发布时间">
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
        <el-form-item label="发布部门" style="margin-left: 20px">
          <el-select
            v-model="form.region"
            placeholder="请选择发布部门"
            :teleported="false"
            clearable
          >
            <el-option label="指挥处" value="1" />
          </el-select>
        </el-form-item>
      </div>
      <div class="z-line"></div>
      <div class="z-flex-r">
        <el-button type="primary" style="margin: 15px 0">报送</el-button>
      </div>
      <el-table
        :data="tableData"
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
        border
        style="width: 100%"
      >
        <el-table-column prop="xh" label="序号" align="center" />
        <el-table-column prop="bm" label="部门" align="center" />
        <el-table-column prop="xxlx" label="信息类型" align="center" />
        <el-table-column prop="ztdrlx" label="主题党日类型" align="center" />
        <el-table-column prop="nrbt" label="内容标题" align="center" />
        <el-table-column prop="fbrq" label="发布日期" align="center" />
        <el-table-column prop="sprq" label="审批日期" align="center" />
        <el-table-column prop="action" label="操作" align="center">
          <template #default="scope">
            <el-link href="javascript:;" @click.prevent="preview(scope)">预览</el-link>
          </template>
        </el-table-column>
      </el-table>
      <ZhzgPagination />
    </div>
    <ReleaseInfo v-else />
  </div>
</template>

<script setup lang="ts">
  import ZhzgPagination from '/@/view/zhzg/components/ZhzgPagination/index.vue';
  import ReleaseInfo from './releaseInfo/index.vue';
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
      xh: 1,
      bm: '指挥处',
      xxlx: '党建活动',
      ztdrlx: '政治生日',
      nrbt: '指挥处组织“过集体政治生日”活动',
      fbrq: '2023-03-01',
      sprq: '2023-03-02',
    },
    {
      xh: 1,
      bm: '指挥处',
      xxlx: '党建活动',
      ztdrlx: '政治生日',
      nrbt: '指挥处组织“过集体政治生日”活动',
      fbrq: '2023-03-01',
      sprq: '2023-03-02',
    },
    {
      xh: 1,
      bm: '指挥处',
      xxlx: '党建活动',
      ztdrlx: '政治生日',
      nrbt: '指挥处组织“过集体政治生日”活动',
      fbrq: '2023-03-01',
      sprq: '2023-03-02',
    },
    {
      xh: 1,
      bm: '指挥处',
      xxlx: '党建活动',
      ztdrlx: '政治生日',
      nrbt: '指挥处组织“过集体政治生日”活动',
      fbrq: '2023-03-01',
      sprq: '2023-03-02',
    },
    {
      xh: 1,
      bm: '指挥处',
      xxlx: '党建活动',
      ztdrlx: '政治生日',
      nrbt: '指挥处组织“过集体政治生日”活动',
      fbrq: '2023-03-01',
      sprq: '2023-03-02',
    },
    {
      xh: 1,
      bm: '指挥处',
      xxlx: '党建活动',
      ztdrlx: '政治生日',
      nrbt: '指挥处组织“过集体政治生日”活动',
      fbrq: '2023-03-01',
      sprq: '2023-03-02',
    },
  ];
  const form = ref({
    date1: '',
    date2: '',
    region: '',
  });
  const isDetail = ref(false);
  const preview = (scope) => {
    console.log(scope);
  };
</script>
<style lang="scss" scoped src="/@/styles/zhzg/z-common.scss"></style>
<style lang="scss" scoped src="/@/styles/zhzg/z-form.scss"></style>
<style lang="scss" scoped src="/@/styles/zhzg/z-pagination.scss"></style>
<style lang="scss" scoped src="/@/styles/zhzg/z-table.scss"></style>
<style lang="scss" scoped>
  .form {
    display: flex;
  }
  .tab {
    ul {
      display: flex;
      li {
        height: 36px;
        background: rgba(103, 1, 1, 0.1);
        border-radius: 4px;
        line-height: 36px;
        font-size: 14px;
        color: #730101;
        text-align: center;
        font-weight: 400;
        padding: 0 15px;
        margin-right: 15px;
        cursor: pointer;
      }
      .active {
        background-color: #730101;
        color: #fff;
      }
    }
  }
</style>

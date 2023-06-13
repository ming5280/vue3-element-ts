<script setup lang="ts">
  import UserAvatar from '/@/assets/images/zhzg/user-avatar.png';

  const activeName = ref('first');
</script>

<template>
  <el-container>
    <el-header height="160px">
      <div class="header">
        <div class="login"></div>
        <div class="first-nav">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="智慧党建" name="first" />
            <el-tab-pane label="智慧信息" name="second" />
            <el-tab-pane label="智慧教育" name="third" />
            <el-tab-pane label="智慧考评" name="fourth" />
          </el-tabs>
        </div>
        <div class="user">
          <img :src="UserAvatar" alt="" />
          <p>张xx</p>
          <div class="vertical-line"></div>
          <span>退出</span>
        </div>
      </div>
    </el-header>
    <router-view />
  </el-container>
</template>

<style lang="scss" scoped>
  :deep(.el-header) {
    padding: 0;
  }
  .header {
    width: 100%;
    height: 100%;
    background: url('/@/assets/images/zhzg/header-bg.png') top/100% 100% no-repeat;
    display: flex;
    align-items: center;
    padding: 0 24px;
    position: relative;
    .login {
      width: 205px;
      height: 54px;
      background: url('/@/assets/images/zhzg/logo.png') no-repeat;
    }
    .first-nav {
      margin-left: 64px;
      :deep(.el-tabs--card > .el-tabs__header) {
        border: none;
      }
      :deep(.el-tabs--card > .el-tabs__header .el-tabs__nav) {
        border: none;
      }
      :deep(.el-tabs__header) {
        margin: 0;
      }
      :deep(.el-tabs--card > .el-tabs__header .el-tabs__item) {
        border: none;
      }
      :deep(.el-tabs__item) {
        // width: 80px;
        height: 40px;
        border-radius: 4px;
        font-size: 16px;
        color: #fcda83;
        line-height: 40px;
        font-weight: 400;
        margin: 0 8px;
        padding: 0 15px;
      }
      :deep(.el-tabs__nav-scroll) {
        padding-bottom: 5px;
      }
      :deep(.el-tabs--card > .el-tabs__header .el-tabs__item.is-active) {
        background-color: #8f2c1c;
        font-weight: 600;
        position: relative;
        &::after {
          content: ' ';
          display: inline-block;
          width: 32px;
          height: 4px;
          background: #fcda83;
          transform: perspective(2px) rotateX(-5deg);
          position: absolute;
          bottom: -4px;
          left: 50%;
          margin-left: -16px;
        }
      }
    }
    .user {
      position: absolute;
      right: 24px;
      top: 50%;
      margin-top: -10px;
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        cursor: pointer;
      }
      p {
        font-size: 16px;
        color: #fcda83;
        font-weight: 400;
        cursor: pointer;
      }
      .vertical-line {
        width: 1px;
        height: 10px;
        opacity: 0.4;
        background: #ffffff;
        margin: 0 10px;
      }
      span {
        font-size: 16px;
        color: #fcda83;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
</style>

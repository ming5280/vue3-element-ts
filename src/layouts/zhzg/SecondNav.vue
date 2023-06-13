<script setup lang="ts">
  // 存放路由meta中keepAlive为true的路由 name
  const keepAliveList = ref([]);

  const activeName = ref('first');
</script>

<template>
  <div class="second-nav">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="党组织部" name="first" />
      <el-tab-pane label="党员管理" name="second" />
      <el-tab-pane label="党建进度" name="third" />
    </el-tabs>
  </div>

  <el-main>
    <router-view v-slot="{ Component }">
      <transition name="move" mode="out-in">
        <keep-alive :include="keepAliveList">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped>
  :deep(.el-main) {
    padding: 0;
  }

  .second-nav {
    width: 100%;
    height: 60px;
    background: #fff4eb;
    box-shadow: 0px 2px 4px 0px rgba(169, 40, 40, 0.14);
    padding: 0 30px;
    :deep(.el-tabs__item) {
      height: 60px;
      font-size: 16px;
      color: #595959;
      line-height: 60px;
      font-weight: 400;
    }
    :deep(.el-tabs__item.is-active) {
      font-size: 16px;
      color: #730101;
      font-weight: 600;
    }
    :deep(.el-tabs__active-bar) {
      width: 32px;
      height: 4px;
      background: #730101;
    }
    :deep(.el-tabs__nav-wrap::after) {
      display: none;
    }
  }
</style>

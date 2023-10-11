<template>
  <el-config-provider
    :size="elementConfig.size"
    :z-index="elementConfig.zIndex"
    :locale="elementConfig.locale"
  >
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
  const elementConfig = reactive({
    zIndex: 3000,
    size: 'default', // small
    locale: zhCN,
  });
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>

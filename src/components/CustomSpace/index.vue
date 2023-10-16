<template>
  <el-space :size="size" :spacer="spacer">
    <slot></slot>
  </el-space>
</template>

<script setup lang="ts">
  import { ElDivider } from 'element-plus';
  const spacer = h(ElDivider, { direction: 'vertical' });

  const props = withDefaults(
    defineProps<{
      size?: number;
    }>(),
    {
      size: 5,
    },
  );

  const size = computed(() => props.size);
</script>

<style lang="scss" scoped>
  :deep(.el-icon) {
    margin-right: 3px;
  }
</style>

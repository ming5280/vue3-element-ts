<template>
    <h2>Vue3-Element-Ts</h2>
    <div>{{ userStore.name }}</div>
</template>

<script lang="ts">
export default {
    name: 'UsePinia',
    inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
</script>

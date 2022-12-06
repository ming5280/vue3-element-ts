<template>
  <div class="wrap">
    <h2>这里是request请求页面</h2>
    <el-button type="primary" @click="requestRes()">发送请求</el-button>
    <br />
    <router-link to="/">点击跳转至首页</router-link>
  </div>
</template>

<script setup lang="ts" name="RequestPage">
import { getUserList } from '/@/api/demo/system';

const requestRes = async () => {
  let result = await getUserList({
    id: '1000010',
  });

  console.log(result);
};
</script>
<style lang="scss" scoped>
.wrap {
  margin: 30px auto;
  width: 300px;
  height: auto;
}
</style>

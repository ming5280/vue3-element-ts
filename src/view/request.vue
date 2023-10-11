<template>
  <div class="wrap">
    <h2>这里是request请求页面</h2>
    <el-button type="primary" @click="send()">发送请求</el-button>
    <br />
    <router-link to="/">点击跳转至首页</router-link>
  </div>
</template>

<script setup lang="ts" name="RequestPage">
  import { getEmoji, getUserList, login } from '/@/api/demo/user';

  const requestUserLsit = async () => {
    let result = await getUserList({
      id: '1000010',
    });

    console.log('list>>>', result);
  };

  const requestLogin = async () => {
    const result = await login({
      username: 'admin',
      password: '123456',
    });
    console.log('user>>>', result);
  };

  const requestEmoji = async () => {
    const result = await getEmoji();
    console.log('emoji>>>', result);
  };

  const send = () => {
    requestLogin();
    requestUserLsit();
    requestEmoji();
  };
</script>

<style lang="scss" scoped>
  // .wrap {
  //   margin: 30px auto;
  //   width: 300px;
  //   height: auto;
  // }
</style>

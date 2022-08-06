<template>
  <h2>这里是request请求页面</h2>
  <br />
  <button @click="requestRes()">请求1</button>
  <button @click="requestResAPI()">请求2</button>
  <br />
  <br />
  <router-link to="/">点击跳转至首页</router-link>
</template>

<script setup lang="ts" name="RequestPage">
import request from '/@/utils/http';
import API from '/@/api';

const requestRes = async () => {
  let result = await request({
    url: '/api/xxx',
    method: 'get',
  });

  console.log(result);
};

const requestResAPI = async () => {
  let result = await API.login('zhangsan', '123456');
  console.log(result);
};
</script>

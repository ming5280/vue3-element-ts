<template>
  <div class="login-form">
    <h2>登录</h2>

    <el-form :model="form">
      <el-form-item prop="password">
        <el-input size="large" v-model="form.account" placeholder="账号" autocomplete="off" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          size="large"
          v-model="form.password"
          type="password"
          placeholder="密码"
          :show-password="true"
          autocomplete="off"
        />
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-form-item prop="rememberMe">
            <el-checkbox v-model="form.rememberMe" label="记住我" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="forgot-pwd">
            <el-link type="primary" :underline="false" size="large" class="" style="height: 40px"
              >忘记密码?</el-link
            >
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item prop="password">
        <el-button type="primary" size="large" style="width: 100%; font-size: 16px"
          >登 录</el-button
        >
      </el-form-item>

      <div style="width: 100%; height: 120px"></div>
    </el-form>
  </div>
</template>
<script setup lang="ts" name="LoginForm">
const form = reactive({
  account: 'admin',
  password: '123456',
  rememberMe: false,
});
</script>
<style lang="scss" scoped>
.login-form {
  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  // :deep(.el-input__wrapper.is-focus) {
  //   border: 1px solid #2a7dc9;
  //   box-shadow: 0 0 0 2px #0960bd33 !important;
  //   outline: 0;
  // }

  // :deep(.el-input__inner) {
  //   font-size: 16px;
  //   color: #000000;
  // }

  :deep(.forgot-pwd .el-form-item__content) {
    justify-content: flex-end;
  }

  :deep(input:not([type='checkbox'])) {
    min-width: 360px;

    @media (max-width: $screen-xl) {
      min-width: 320px;
    }

    @media (max-width: $screen-lg) {
      min-width: 260px;
    }

    @media (max-width: $screen-md) {
      min-width: 240px;
    }

    @media (max-width: $screen-sm) {
      min-width: 160px;
    }
  }
}
</style>

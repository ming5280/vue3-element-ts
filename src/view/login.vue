<template>
  <div class="login">
    <div class="dark-switch"></div>
  </div>
</template>

<script setup lang="ts" name="LoginPage"></script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url('/@/assets/images/login-bg.svg');
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: '';
  }
  .dark-switch {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
  }
}
</style>

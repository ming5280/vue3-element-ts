<template>
  <el-container>
    <el-header height="160px">
      <div class="header">
        <div class="login"></div>
        <div class="first-nav">
          <el-tabs :value="firstNavActive" type="card" @tab-change="firstNavChange">
            <el-tab-pane
              v-for="(item, index) in menuList"
              :key="index"
              :label="item.name"
              :name="item.path"
            />
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
    <div class="second-nav">
      <el-tabs :value="secondNavActive" @tab-change="secondNavChange">
        <el-tab-pane
          v-for="(item, index) in secondMenuList"
          :key="index"
          :label="item.name"
          :name="item.path"
        />
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
  </el-container>
</template>

<script setup lang="ts" name="Zhzg">
  import type { TabPaneName } from 'element-plus';
  import UserAvatar from '/@/assets/images/zhzg/user-avatar.png';
  import { useRouter } from 'vue-router';
  // useRoute

  const router = useRouter();

  // 存放路由meta中keepAlive为true的路由 name
  const keepAliveList = ref([]);
  const menuList = ref([
    {
      name: '智慧党建',
      path: '/zhzg/zhdj',
      meta: { title: '智慧党建', keepAlive: false, requireAuth: true },
      children: [
        {
          name: '党组织部',
          path: '/zhzg/zhdj/dzzb',
          meta: { title: '党组织部', keepAlive: false, requireAuth: true },
          children: [],
        },
        {
          name: '党员管理',
          path: '/zhzg/zhdj/dygl',
          meta: { title: '党员管理', keepAlive: false, requireAuth: true },
          children: [],
        },
        {
          name: '党建进度',
          path: '/zhzg/zhdj/djjd',
          meta: { title: '党建进度', keepAlive: false, requireAuth: true },
          children: [],
        },
      ],
    },
    {
      name: '智慧信息',
      path: '/zhzg/zhxx',
      meta: { title: '智慧信息', keepAlive: false, requireAuth: true },
      children: [
        {
          name: '信息报送',
          path: '/zhzg/zhxx/xxbs',
          meta: { title: '信息报送', keepAlive: false, requireAuth: true },
          children: [],
        },
        {
          name: '我的信息',
          path: '/zhzg/zhxx/wdxx',
          meta: { title: '我的信息', keepAlive: false, requireAuth: true },
          children: [],
        },
      ],
    },
    {
      name: '智慧教育',
      path: '/zhzg/zhjy',
      meta: { title: '智慧教育', keepAlive: false, requireAuth: true },
      children: [],
    },
    {
      name: '智慧考评',
      path: '/zhzg/zhkp',
      meta: { title: '智慧考评', keepAlive: false, requireAuth: true },
      children: [],
    },
  ]);
  // 取路由路径展示
  const firstNavActive = ref(menuList.value[0].path);
  const secondMenuList = computed(() => {
    if (firstNavActive.value) {
      const curr: any = menuList.value.find((i) => firstNavActive.value === i.path);
      return !!~curr ? curr.children : [];
    } else {
      return [];
    }
  });
  const secondNavActive = ref(secondMenuList.value[0].path);

  const firstNavChange = (name: TabPaneName) => {
    firstNavActive.value = name;
    // console.log(secondMenuList.value[0].path);
    // debugger;

    secondNavActive.value = secondMenuList.value[0].path;
    router.push(name);
    console.log(name, secondNavActive.value);
  };
  const secondNavChange = (name: TabPaneName) => {
    secondNavActive.value = name;
    router.push(name);
  };
</script>

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
  // :deep(.el-main) {
  //   padding: 0;
  // }

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

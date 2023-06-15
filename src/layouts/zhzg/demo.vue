<template>
  <el-container>
    <el-header height="160px">
      <div class="header">
        <div class="login"></div>
        <div class="first-nav">
          <el-menu
            :router="true"
            :default-active="firstMenuDefault"
            class="first-menu"
            mode="horizontal"
            @select="firstHandleSelect"
          >
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.path">{{
              item.name
            }}</el-menu-item>
          </el-menu>
        </div>
        <div class="user">
          <img :src="UserAvatar" alt="" />
          <p>张xx</p>
          <div class="vertical-line"></div>
          <span>退出</span>
        </div>
      </div>
    </el-header>
    <div class="second-nav" v-if="secondMenuList.length">
      <el-menu
        :router="true"
        :default-active="secondMenuDefault"
        class="second-menu"
        mode="horizontal"
        @select="secondHandleSelect"
      >
        <el-menu-item v-for="(item, index) in secondMenuList" :key="index" :index="item.path">{{
          item.name
        }}</el-menu-item>
      </el-menu>
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

<script setup lang="ts">
  import UserAvatar from '/@/assets/images/zhzg/user-avatar.png';
  import { useRouter } from 'vue-router';
  // useRoute useRouter

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

  // 获取子节点的父节点信息   to do 所有父节点信息
  const findParentMenus = (path: string, nodes: any) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (
        node.children &&
        node.children.length !== 0 &&
        node.children.some((child: any) => child.path === path)
      ) {
        return node;
      }

      if (node.children && node.children.length !== 0) {
        findParentMenus(path, node.children);
      } else {
        continue;
      }
    }
  };

  const parentNodes = findParentMenus(router.currentRoute.value.path, menuList.value);

  const firstMenuDefault = ref(parentNodes.path);
  const secondMenuDefault = ref(router.currentRoute.value.path);

  const secondMenuList = ref(parentNodes.children);

  const firstHandleSelect = (key: string, keyPath: string[]) => {
    // secondMenuList.value = [];
    console.log(key, keyPath);
    const curr: any = menuList.value.find((i) => i.path === key);
    secondMenuList.value = !!~curr ? curr?.children : [];
    secondMenuDefault.value = router.currentRoute.value.path;
  };
  const secondHandleSelect = () => {};
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
      .first-menu {
        background-color: transparent;
        border-bottom: none;
        :deep(.el-menu-item) {
          height: 40px;
          border-radius: 4px;
          font-size: 16px;
          color: #fcda83;
          line-height: 40px;
          font-weight: 400;
          margin: 0 8px;
          padding: 0 15px;
          border-bottom: none;
        }
        :deep(.el-menu-item.is-active) {
          background-color: #8f2c1c;
          font-weight: 600;
          color: #fcda83 !important;
          border-bottom: none;
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
        :deep(.el-menu-item:hover) {
          background-color: #8f2c1c;
          font-weight: 600;
        }
        :deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):focus) {
          background-color: #8f2c1c;
          font-weight: 600;
        }
        :deep(
            .el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
            .el-menu--horizontal .el-menu-item:not(.is-disabled):focus
          ) {
          background-color: #8f2c1c;
          font-weight: 600;
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
  .second-menu {
    width: 100%;
    height: 60px;
    background: #fff4eb;
    box-shadow: 0px 2px 4px 0px rgba(169, 40, 40, 0.14);
    padding: 0 30px;
    :deep(.el-menu-item) {
      height: 60px;
      font-size: 16px;
      color: #595959;
      line-height: 60px;
      font-weight: 400;
    }
    :deep(.el-menu-item.is-active) {
      font-size: 16px;
      color: #730101 !important;
      font-weight: 600;
      background-color: transparent !important;
      border-bottom: 2px solid #730101;
    }
    :deep(.el-menu-item:hover) {
      background-color: transparent !important;
      color: #730101 !important;
    }
  }
</style>

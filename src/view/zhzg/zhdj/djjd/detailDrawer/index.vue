<template>
  <el-drawer v-model="drawer" :direction="'rtl'" :size="'32%'" :top="'5vh'">
    <template #header>
      <div class="drawer-header">
        <div class="z-title">
          <p>基本信息</p>
        </div>
      </div>
    </template>
    <template #default>
      <div class="z-desc">
        <div class="z-cell">
          <span>会议地点：</span>
          <p>视频会议</p>
        </div>
        <div class="z-cell">
          <span>会议主持：</span>
          <p>民警x</p>
        </div>
        <div class="z-cell">
          <span>记录人：</span>
          <p>民警x</p>
        </div>
        <div class="z-cell">
          <span>出席人员：</span>
          <p>民警x</p>
        </div>
        <div class="z-cell">
          <span>会议人数：</span>
          <p>10人</p>
        </div>
        <div class="z-cell">
          <span>会议议题：</span>
          <p>指挥处xxxx小组会议</p>
        </div>
        <div class="z-cell">
          <span>会议记录：</span>
          <p>
            6月5日上午，省委副书记、省长王忠林主持召开省政府常务会议，传达学习习近平总书记在中央政治局第五次集体学习、二十届中央国家安全委员会第一次会议和文化传承发展座谈会上的重要讲话精神；深入贯彻习近平总书记关于推动长江经济带发展的重要论述，按照省委工作要求，研究湖北长江经济带高质量发展工作；贯彻6月2日国务院常务会议精神，部署我省落实措施；研究降低企业成本、巩固拓展脱贫攻坚成果同乡村振兴有效衔接、专家人才推荐选拔等工作。
          </p>
        </div>
      </div>
    </template>
    <template #footer>
      <!-- <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div> -->
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
  const drawer = ref(true);
</script>

<style lang="scss" scoped src="/@/styles/zhzg/z-common.scss"></style>
<style lang="scss" scoped src="/@/styles/zhzg/z-drawer.scss"></style>
<style lang="scss" scoped>
  .drawer-header {
  }
</style>

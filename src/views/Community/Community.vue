<template>
  <div class="community">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="1">
        <i class="el-icon-chat-dot-round"></i>
        <template #title>杂谈</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <template #title>新闻</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-monitor"></i>
        <template #title>游戏</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-flag"></i>
        <template #title>情感</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-basketball"></i>
        <template #title>体育</template>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-film"></i>
        <template #title>影视</template>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-camera"></i>
        <template #title>摄影</template>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-burger"></i>
        <template #title>美食</template>
      </el-menu-item>
    </el-menu>
    <Content></Content>
  </div>
</template>

<script>
import {ref,} from "vue";
import Content from "@/common/Content";

export default {
  name: "Community",
  components:{Content},
  setup() {
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.community{
  display: flex;
}
</style>

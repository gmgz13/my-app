<template>
  <div class="leftPersonal">
    <el-image class="personalPic" :src="personal.picUrl"></el-image>
    <el-descriptions :column="1" class="centerText">
      <el-descriptions-item label="昵称:" label-align="center" align="center">{{personal.name}}</el-descriptions-item>
      <el-descriptions-item label="Id:" label-align="center" align="center">{{personal.id}}</el-descriptions-item>
      <el-descriptions-item label="性别:" label-align="center" align="center">{{personal.sex}}</el-descriptions-item>
      <el-descriptions-item label="年龄:" label-align="center" align="center">{{personal.age}}</el-descriptions-item>
      <el-descriptions-item label="情感状态:" label-align="center" align="center">{{personal.state}}</el-descriptions-item>
      <el-descriptions-item label="学校:" label-align="center" align="center">{{personal.school}}</el-descriptions-item>
      <el-descriptions-item label="个性签名:" label-align="center" align="center">{{personal.signature}}</el-descriptions-item>
    </el-descriptions>
    <el-descriptions direction="vertical" class="click">
      <el-descriptions-item label="我的关注" label-align="center" width="150px" align="center">123</el-descriptions-item>
      <el-descriptions-item label="粉丝" label-align="center" align="center" width="150px">18</el-descriptions-item>
    </el-descriptions>
    <Drawer></Drawer>
  </div>
</template>

<script>
import {useStore} from "vuex";
import Drawer from "@/common/Drawer";

export default {
  name: "Personal",
  components:{Drawer},
  setup() {
    const store = useStore()
    let personal = store.state.personal

    return {
      personal,
    }
  }
}
</script>

<style scoped>
.personalPic{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
  margin: 10px;
}
.leftPersonal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 10px;
  margin-top: 40px;
}
.click{
  margin-top: 20px;
}
</style>

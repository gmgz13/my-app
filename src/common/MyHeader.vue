<template>
    <div class="menu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#81C7D4"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
      <div class="leftBox">
        <img src="../assets/b.png">
        <el-image type="primary" style="margin-left: 12px" @click="drawer = true" :src="personal.picUrl" class="img"></el-image>
        <el-drawer v-model="drawer" size="30%" direction="ltr" :show-close="false" class="personalDrawer" :with-header="false">
          <Personal></Personal>
        </el-drawer>
      </div>
      <div class="center">
        <router-link to="/home" class="home">
          <el-menu-item index="1"><span class="centerText">主页</span></el-menu-item>
        </router-link>
        <router-link to="/school" class="school">
          <el-menu-item index="2"><span class="centerText">校园</span></el-menu-item>
        </router-link>
        <el-menu-item>
          <el-button type="primary" icon="el-icon-plus" circle plain class="upload" @click="view = true"></el-button>
          <el-drawer v-model="view" size="75%" direction="btt" :show-close="false" class="personalDrawer" :with-header="false">
            <Upload></Upload>
          </el-drawer>
        </el-menu-item>
        <router-link to="/square" class="square">
          <el-menu-item index="4"><span class="centerText">附近</span></el-menu-item>
        </router-link>
        <router-link to="/community" class="Community">
          <el-menu-item index="5"><span class="centerText">社区</span></el-menu-item>
        </router-link>
      </div>
      <div class="rightBox">
        <el-input class="search" v-model="value" placeholder="请输入内容"></el-input>
        <el-button type="primary">
          <span style="vertical-align: middle;">搜索</span>
        </el-button>
      </div>
    </el-menu>
  </div>
  <div>
  </div>
</template>

<script>
import {useStore,} from "vuex";
import {ref} from "vue";
import Personal from "@/common/Personal";
import Upload from "@/common/Upload";

export default {
  components:{
    Personal,
    Upload
  },
  setup() {
    const store = useStore()
    let value = store.state.searchValue
    let personal = store.state.personal
    const drawer = ref(false)
    const view = ref(false)
    return {
      activeIndex: '1',
      value,
      personal,
      drawer,
      view,
      textarea1: ref(''),
      textarea2: ref(''),
      title:ref('')
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
  },
}
</script>

<style scoped>
.el-menu-demo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}
.leftBox{
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img{
  width: 180px;
  margin: 20px;
}
.leftBox{
  width: 33%;
}
.center{
  width: 33%;
}
.rightBox{
  width: 33%;
}
.center{
  display: flex;
}
.search{
  width: 300px;
}
.home,.school,.square,.Community{
  text-decoration: none;
}
.img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 20px;
}
.centerText{
  padding: 0;
}
.upload{
  width: 50px;
  height: 50px;
}

</style>

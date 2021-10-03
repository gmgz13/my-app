<template>
  <div class="home">
    <el-scrollbar max-height="640px">
      <el-card class="box-card main" v-for="(item,i) in data" :key="i">
        <div class="header">
          <div><img class="tx" :src="item.picUrl"></div>
          <div class="name">{{item.name}}</div>
        </div>
        <div class="text item">
          {{item.article}}
        </div>
        <div class="footer">
          <img v-show="!like" class="icon" :src="like1">
          <img v-show="like" class="icon" :src="like2">
        </div>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<script>
import like1 from '/src/assets/喜欢.png'
import like2 from '/src/assets/喜欢2.png'
import {useStore} from "vuex";

export default {
  name: "School",
  setup() {
    const store = useStore()
    let rank = store.state.rank
    let data = store.state.data
    let like = false

    console.log(data)

    return {
      rank,
      data,
      like1,
      like2,
      like
    }
  },
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction:column;
  position:relative;
  margin-top:10px;
  left: 200px;
  width: 850px;
  height: 630px;
}
.tx{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.footer{
   float:right;
   display: flex;
   justify-content: center;
 }
.item {
  padding: 18px 0;
  width: 750px;
  height: 50px;
}
.text{
  font-size: 16px;
  overflow: hidden;
  margin: 0 15px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
}
.header{
  display: flex;
  align-items: center;
}
.main{
  width: 800px;
  height: 210px;
  position:relative;
}
.icon{
  width: 30px;
  height: 30px;
  text-align: center;
  margin:15px 5px;
}
.name{
  margin: 5px;
  font-size: 15px;
  font-weight: 600;
}
.box-card{
  width: 800px;
  margin: 10px 0;
}
/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>

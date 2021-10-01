<template>
  <div class="allMain">
    <el-card class="box-card rank" @click="play(1)">
      <template #header>
        <div class="card-header">
          <span>排行榜</span>
        </div>
      </template>
      <div v-for="(item,i) in rank" :key="i" class="text item search" @click="setSearchValue(item.title)">
          {{item.title}}
      </div>
    </el-card>
    <el-card class="home">
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
    </el-card>

  </div>
</template>

<script>
import like1 from '/src/assets/喜欢.png'
import like2 from '/src/assets/喜欢2.png'
import {useStore,mapMutations} from "vuex";

export default {
  name: "index",
  setup(){
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
  data() {
    return {
      count: 0,
    }
  },
  methods:{
    load() {
      this.count += 2
    },
    ...mapMutations(['setSearchValue'])
  }
}
</script>

<style scoped>

.item {
  padding: 18px 0;
  width: 750px;
  height: 50px;
}

.home{
  display: flex;
  flex-direction:column;
  position:relative;
  margin-top:10px;
  left: 200px;
  height: 640px;
  width: 850px;
  overflow:scroll;
  background-color: aliceblue;
}
.main{
  width: 800px;
  height: 220px;
  position:relative;
}
.box-card{
  width: 800px;
  margin: 10px 0;
}
.rank{
  position:fixed;
  top:100px;
  right:120px;
  width: 300px;
  float: right;
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
.search{
  height: 10px;
}
.tx{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.name{
  margin: 5px;
  font-size: 15px;
  font-weight: 600;
}
.header{
  display: flex;
  align-items: center;
}
.footer{
  float:right;
  display: flex;
  justify-content: center;
}
.icon{
  width: 30px;
  height: 30px;
  text-align: center;
  margin:15px 5px;
}
::-webkit-scrollbar
{
  display: flow;
  width: 8px;  /*滚动条宽度*/
  height: 7px;  /*滚动条高度*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  border-radius: 10px;
  background-color: #81C7D4;  /*滚动条的背景颜色*/
}
</style>

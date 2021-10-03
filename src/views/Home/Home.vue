<template>
  <div class="allMain">
    <el-card class="box-card rank">
      <template #header>
        <div class="card-header">
          <span>排行榜</span>
        </div>
      </template>
      <div v-for="(item,i) in rank" :key="i" class="text item search" @click="setSearchValue(item.title)">
          {{item.title}}
      </div>
    </el-card>
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
  width: 850px;
  height: 630px;
}
.main{
  width: 800px;
  height: 210px;
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
/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>

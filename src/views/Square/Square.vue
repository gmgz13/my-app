<template>
  <div class="square">
    <el-scrollbar max-height="640px">
      <el-card class="box-card" v-for="(item,i) in nearby" :key="i">
        <div class="header">
          <div><img class="tx" :src="item.picUrl"></div>
          <div class="user">
            <div class="name">{{item.userName}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
        <div class="text item">
          {{item.context}}
        </div>
        <div class="footer">
          <img :src="dz" class="icon">
        </div>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<script>
import dz from '/src/assets/点赞.png'
import {useStore} from "vuex";

export default {
  name: "Square",
  setup(){
    const store = useStore()
    let nearby = store.state.nearby

    return{
      nearby,
      dz
    }
  }
}
</script>

<style scoped>
.tx{
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.name{
  margin: 5px;
  font-size: 15px;
  font-weight: 600;
}
.time{
  font-size: 12px;
  margin: 5px;
  color: #8c939d;
}
.header{
  display: flex;
  align-items: center;
}
.square{
  display: flex;
  flex-direction:column;
  position: absolute;
  left: 250px;
  width: 1000px;
  height: 630px;
}
.footer{
  display: flex;
  justify-content: flex-end;
}
.box-card{
  margin: 5px;
  border-radius: 1px;
}
.icon{
  width: 25px;
  height: 25px;
  text-align: center;
  margin-top: 10px;
  margin-right: 20px;
}
</style>

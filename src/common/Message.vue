<template>
<div class="message">
  <div class="msgList">
    <div class="leftHeader">
      <el-input v-model="input2" placeholder="搜索" prefix-icon="el-icon-search" class="search" size="mini"/>
    </div>
    <ul class="ul">
      <el-scrollbar max-height="640px">
          <li v-for="(item,i) in chatList" :key="i" class="sessionList" :class="{ active: item.id === selectId }" @click="select(item)">
            <div class="list-left">
              <img class="avatar"  width="42" height="42" :alt="item.user.name" :src="item.user.img">
            </div>
            <div class="list-right">
              <p class="name">{{item.user.name}}</p>
              <span class="time">{{item.messages[item.messages.length-1].date}}</span>
              <p class="lastMsg">{{item.messages[item.messages.length-1].content}}</p>
            </div>
          </li>
      </el-scrollbar>
    </ul>
  </div>
  <div class="messageList">
    <div class="header">
      <p>{{selectName}}</p>
    </div>
    <div class="bodyMessage">
      <div></div>
      <div class="text">
        <el-button type="success" class="send" size="mini">发送</el-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {useStore, mapMutations} from "vuex";
import {ref} from "vue";

export default {
  name: "Message",
  setup(){
    const store = useStore()
    const chatList = store.state.chatList
    let selectId = ref(1)
    let selectName = ref(chatList[0].user.name)

    function select(item){
      selectId.value = item.id
      selectName.value = item.user.name
    }

    return{
      chatList,
      selectId,
      select,
      selectName,
      input2:''
    }

  },
  methods:{
    ...mapMutations(["selectSession"])
  }
}
</script>

<style  scoped>
.msgList{
  height: 500px;
  width: 250px;
  background-color: #EDEEEF;
  overflow: scroll;
  border-top:1px solid gainsboro;
  border-left:1px solid gainsboro;
  border-bottom:1px solid gainsboro;
}
.sessionList{
  display: flex;
  padding: 12px;
  width: 226px;
  transition: background-color .1s;
}
.sessionList:hover{
  background-color:lightgray;
}
.active{
  background-color:lightgray;
}
.avatar{
  border-radius: 2px;
  margin-right: 8px;
}
.list-right{
  position: relative;
  flex: 1;
  margin-top: 4px;
}
.name{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  position: absolute;
  top: -18px;
}
.time{
  float: right;
  color: #999;
  font-size: 10px;
  vertical-align: top;
  position: absolute;
  top: -2px;
  right: 0;
}
.lastMsg{
  position: absolute;
  font-size: 12px;
  width: 130px;
  height: 15px;
  line-height: 15px;
  color: #999;
  top: 10px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.message{
  display: flex;
  width: 800px;
}
.ul{
  height: 450px;
  position: absolute;
  left: -15px;
}
.leftHeader{
  width: 280px;
  height: 50px;
  background-color: #F3F4F5;
}
.search{
  width: 230px;
  height: 20px;
  margin: 10px;
}
.header{
  position: absolute;
  right: 280px;
  height: 50px;
}
.messageList{
  width: 550px;
  background-color: #F3F4F5;
  border:1px solid gainsboro;
}
.bodyMessage{
  position: absolute;
  bottom: 30px;
  left: 275px;
  width: 550px;
  height: 449px;
  border-top:1px solid gainsboro;
}
.text{
  width: 548px;
  height: 120px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: white;
  border:1px solid gainsboro;
}
.send{
  position:absolute;
  right: 10px;
  bottom: 10px;
}
</style>

<template>
  <div class="content">
    <el-scrollbar v-show="!show" max-height="656px">
      <el-card class="box-card" v-for="(item,i) in game" :key="i" @click="detail(item)">
        <div class="header">
          <div class="user">
            <div><img class="tx" :src="item.userPicUrl"></div>
            <div>
              <div class="name">{{item.userName}}</div>
              <el-tag class="tag" type="info" size="mini">{{item.tag}}</el-tag>
            </div>
          </div>
        </div>
        <div class="rightHeader">
          {{item.title}}
        </div>
        <div class="rightBody">
          {{item.main}}
        </div>
        <div class="footer">
          <img class="icon" :src="like">
          <img class="icon" :src="sc">
          <img class="icon" :src="pl">
        </div>
      </el-card>
    </el-scrollbar>
    <el-scrollbar v-show="show" max-height="656px">
      <div class="contextHeader">
        <el-tabs type="card" class="headerCenter" stretch>
          <el-tab-pane label="正文">


          </el-tab-pane>
          <el-tab-pane label="评论">
            <div v-for="(item,i) in comment" :key="i">
              <div class="user">
                <img class="tx" :src="item.userPicUrl"/>
                <div>{{item.userName}}</div>
              </div>
              <div>
                {{item.say}}
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <img class="back" :src="close" @click="show=null">
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import {useStore} from "vuex";
import like from '/src/assets/点赞.png'
import sc from '/src/assets/收藏.png'
import close from '/src/assets/关闭.png'
import pl from '/src/assets/评论.png'
import {ref} from "vue";

export default {
  name: "Content",
  setup(){
    const store = useStore()
    let article = store.state.article
    let game = article.game
    let show = ref()
    let comment = ref()

    function detail(item){
      show.value = item
      comment.value = item.comment
      console.log(item)
    }

    return{
      article,
      game,
      like,
      sc,
      pl,
      detail,
      close,
      show,
      comment
    }
  }
}
</script>

<style scoped>
.tx{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
}
.user{
  display: flex;
}
.name{
  font-size: 12px;
  font-weight: 500;
}
.rightHeader{
  margin: 5px;
  font-size: 15px;
  font-family:宋体;
  font-weight: 600;
}
.rightBody{
  font-size: 10px;
  color: gray;
  height: 50px;
  overflow: hidden;
  text-overflow: inherit;
  display: -webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
}
.icon{
  width: 20px;
  height: 20px;
  margin: 10px;
}
.back{
  width: 20px;
  height: 20px;
  margin: 10px;
}
.box-card{
  height: 200px;
  width: 1320px;
}
.footer{
  display: flex;
  justify-content: flex-end;
}
.contextHeader{
  display: flex;
}
.headerCenter{
  width: 1280px
}
</style>

<template>
  <el-row class="footer">
    <el-button type="primary" @click="comment = true" round>我的评论</el-button>
    <el-drawer v-model="comment" :append-to-body="true" :with-header="false" direction="ltr">
      <el-scrollbar v-show="!show" max-height="740px">
        <div v-for="(item , i) in personal.comments" :key="i" class="myComment">
          <div class="user">
            <img :src="item.picUrl" class="tx">
            <div class="UserContent">
              <div class="name">{{item.name}}</div>
              <div class="time">{{item.time}} 评论了帖子</div>
            </div>
          </div>
          <div class="comment">{{item.say}}</div>
          <div class="article">
            <div class="author">{{item.author}}</div>
            <div class="title">{{item.articleTitle}}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-drawer>
    <el-button type="primary" @click="collection = true" round>我的收藏</el-button>
    <el-drawer v-model="collection" :append-to-body="true" :with-header="false" direction="ltr">
      <el-scrollbar v-show="!show" max-height="740px">
        <div v-for="(item , i) in personal.collections" :key="i" class="myComment">
          <div class="user">
            <img :src="item.articlePicUrl" class="tx">
            <div class="UserContent">
              <div class="name">{{item.author}}</div>
              <div class="time">{{item.time}} 发表了帖子</div>
            </div>
          </div>
          <div class="articleCollection">
            <div class="titleCollection">{{item.articleTitle}}</div>
            <div class="contentCollection">{{item.articleContent}}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-drawer>
    <el-button type="success" round @click="centerDialogVisible = true">我的消息</el-button>
    <el-dialog v-model="centerDialogVisible" title="我的消息" width="56%" center>
      <Message></Message>
    </el-dialog>
  </el-row>
  <el-row class="footer">
    <el-button type="warning" @click="information = true" round>修改信息</el-button>
    <el-drawer v-model="information" :append-to-body="true" :with-header="false" direction="ltr">
      <el-descriptions :column="1" class="centerText">
        <el-descriptions-item class="imageHerd" label="头像:" label-align="left" align="center">
          <el-upload
              list-type="picture-card"
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus"></i>
          </el-upload>
        </el-descriptions-item>
        <el-descriptions-item label="昵称:" label-align="center" align="center">
          <el-input v-model="name" maxlength="10"></el-input>
        </el-descriptions-item>
        <el-descriptions-item label="年龄:" label-align="center" align="center">
          <el-input v-model="age"></el-input>
        </el-descriptions-item>
        <el-descriptions-item label="情感信息:" label-align="center" align="center">
          <el-radio v-model="radio" label="1" border size="medium">单身</el-radio>
          <el-radio v-model="radio" label="2" border size="medium">恋爱中</el-radio>
          <el-radio v-model="radio" label="3" border size="medium">秘密</el-radio>
        </el-descriptions-item>
        <el-descriptions-item label="个性签名:" label-align="center" align="center">
          <el-input v-model="signature" :autosize="{ minRows: 5, maxRows: 6 }" type="textarea" maxlength="100"></el-input>
          <el-button type="success" class="ok">保存</el-button>
        </el-descriptions-item>
      </el-descriptions>
    </el-drawer>
    <el-button type="danger" @click="password = true" round>修改密码</el-button>
    <el-drawer v-model="password" :append-to-body="true" :with-header="false" direction="ltr">
      <el-descriptions :column="1" class="centerText1">
        <el-descriptions-item label="邮箱:" align="center">
          <el-input type="email" v-model="email" class="input1"></el-input>
          <el-button type="primary" size="small" round class="get">获取验证码</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="验证码:" align="center">
          <el-input class="input2"></el-input>
        </el-descriptions-item>
        <el-descriptions-item label-align="center" align="center">
          <el-button type="success" class="ok" @click = "isTrue = true">下一步</el-button>
          <el-drawer v-model="isTrue" :append-to-body="true" :with-header="false" direction="ltr"  class="new">
            <el-descriptions :column="1">
              <el-descriptions-item label="新 密 码:" align="center">
                <el-input type="password" v-model="newPassword" class="newBody1"></el-input>
              </el-descriptions-item>
              <el-descriptions-item label="确认新密码:" align="center">
                <el-input type="password" v-model="againPassword" class="newBody2"></el-input>
              </el-descriptions-item>
              <el-descriptions-item align="center">
                <el-button type="success" class="ok">确认</el-button>
              </el-descriptions-item>
            </el-descriptions>
          </el-drawer>
        </el-descriptions-item>
      </el-descriptions>
    </el-drawer>
    <el-button type="danger" round>退出登录</el-button>
  </el-row>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";
import Message from "@/common/Message";

export default {
  name: "Drawer",
  components:{Message},
  setup(){
    const store = useStore()
    let personal = store.state.personal
    const innerDrawer = ref(false)
    const comment = ref(false)
    const collection = ref(false)
    const information = ref(false)
    const password = ref(false)
    const isTrue = ref(false)

    const name = ref(personal.name)
    const age = ref(personal.age)
    const state = ref(personal.state)
    const signature = ref(personal.signature)
    const email = ref('')
    const newPassword = ref('')
    const againPassword = ref('')

    return{
      innerDrawer,
      comment,
      collection,
      password,
      information,
      personal,
      email,
      newPassword,
      againPassword,
      isTrue,

      name,
      age,
      state,
      signature,

      centerDialogVisible: ref(false),
      radio: ref('1'),
    }
  },
  data() {
    return {
      imageUrl: '',
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    },
  },
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.footer{
  margin-top: 20px;
}
.centerText{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:50px 10px;
  text-align: center;
}
.centerText1{
  margin: 100px 40px;
}
.ok{
  margin-top: 30px;
}
.newBody2{
  width: 150px;
  height: 50px;
  margin: 20px;
}
.newBody1{
  width: 150px;
  height: 50px;
  margin-top: 100px;
  margin-left: 20px;
}
.input1,.input2{
  width: 130px;
  height: 50px;
  margin:15px;
}
.get{
  position: absolute;
  top: 125px;
  right:25px;
}
.input1{
  margin-right: 3px;
}
.myComment{
  border-bottom: 1px solid #EEEDED;
  margin: 10px;
}
.author{
  font-size: 12px;
  color: #8c939d;
  margin: 5px;
}
.article{
  background-color: #F8F8F8;
  margin: 10px;
}
.tx{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
}
.title{
  font-size: 13px;
  margin: 5px;
}
.titleCollection{
  margin: 5px 10px;
  font-size: 13px;
  color: #4F4E4E;
  font-weight: 600;
}
.name{
  font-size: 13px;
}
.comment{
  font-size: 14px;
  margin:0 10px;
}
.user{
  display: flex;
  align-items: center;
}
.time{
  font-size: 12px;
  color: #9AA9B7;
}
.contentCollection{
  font-size: 12px;
  margin:10px;
  background-color: #F8F8F8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}
</style>

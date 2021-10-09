<template>
  <div class="register">
    <div id="loginDiv">
      <form method="post">
        <h1>注册页面</h1>
        <div class="center">
          <p>用 户 名 :<input id="userName" v-model="user.userName" name="userName" type="text" autofocus required><label id="name_trip"></label></p>
          <p>用户密码:<input id="password" v-model="user.userPassword" type="password" required><label id="password_trip"></label></p>
          <p>确认密码:<input id="surePassword" type="password" required><label id="surePassword_trip"></label></p>
          <div class="check">
            <p>电子邮件:<input id="email" v-model="user.userEmail" type="email" required><label id="emil_trip"></label></p>
            <button class="checking">获取验证码</button>
          </div>
          <p>验 证 码 :<input id="code" type="text" required><label id="code_trip"></label></p>
          <p>就读学校:<input id="school" v-model="user.userSchool" type="text" required><label id="school_trip"></label></p>
        </div>
        <div>
          <p style="text-align: center;">
            <input type="submit" class="button" value="提交" @click="submitFunc">
            <input type="reset" class="button"  value="重置">
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import router from "@/router";

export default {
  name: "Register",
  setup(){
    let user = reactive({
      userName:'',
      userPassword:'',
      userSchool:'',
      userEmail:''
    })

    function submitFunc(){
      console.log(this.user)
      router.push("/login")
    }
    return{
      user,
      submitFunc
   }
  },
  methods:{
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.check{
  display: flex;
  margin-left: 110px;
}

#loginDiv {
  position: fixed;
  top:100px;
  left: 500px;
  width: 37%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color:#1C1C1C;
  box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
  opacity: 0.6;
  border-radius: 8px;
}

#name_trip {
  color: red;
}

p{
  margin-top: 10px;
  color: azure;
}

.sexDiv>input,
.hobby>input {
  width: 30px;
  height: 17px;
}

input, select {
  margin-left: 15px;
  border-radius: 5px;
  border-style: hidden;
  height: 30px;
  width: 140px;
  background-color: rgba(216, 191, 216, 0.5);
  outline: none;
  color: #f0edf3;
}

.button {
  border-color: cornsilk;
  background-color: rgba(100, 149, 237, .7);
  color: aliceblue;
  border-style: hidden;
  border-radius: 5px;
  width: 100px;
  height: 31px;
  font-size: 16px;
}
.checking{
  border-color: cornsilk;
  background-color: rgba(100, 149, 237, .7);
  color: aliceblue;
  border-style: hidden;
  border-radius: 5px;
  width: 100px;
  height: 31px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}

.introduce>textarea {
  background-color: rgba(216, 191, 216, 0.5);
  border-style: hidden;
  outline: none;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #f0edf3;

}

b {
  margin-left: 50px;
  color: #FFEB3B;
  font-size: 10px;
  font-weight: initial;

}
.center{
  display: flex;
  flex-direction:column;
  align-items: center;
}
.register{
  background-size:cover;
  background-image: url("../../assets/back.jpg");
  background-position: center;
  height: 735px;
}
</style>

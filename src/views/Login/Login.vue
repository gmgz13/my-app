<template>
  <div class="login">
    <div class="container" id="container">
      <!-- 登录页面 -->
      <div class="form-container sign-in-container">
        <form @submit.prevent="login">
          <h1>登录</h1>
          <div>
            <input type="email" name="email" id="email" placeholder="请输入邮箱/手机号" v-model="userPhone">
            <input type="password" name="password" id="password" placeholder="请输入密码" v-model="userPassword">
          </div>
          <div><a href="/" class="forget">忘记密码</a></div>
          <button>登录</button>
        </form>
      </div>

      <!-- 覆盖容器 -->
      <div class="overlay-container">
        <div class="overlay">

          <!-- 覆盖左边 -->
          <div class="overlay-penal overlay-left-container"></div>
          <!-- 覆盖右边 -->
          <div class="overlay-penal overlay-right-container">
            <h1>你好 朋友！</h1>
            <p>
              输入您的个人详细信息，与我们一起开始旅程
            </p>
            <router-link to="/register"><button class="ghost" id="signUp">注册</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import router from "@/router";

export default {
  name: "Login",
  setup(){
    let userPassword = ref()
    let userPhone = ref()
    function login(){
      console.log(userPhone)
      console.log(userPassword)
      router.push("/home")
    }

    return{
      login,
      userPhone,
      userPassword,
    }
  }
}
</script>

<style scoped>
* {
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F6F5F7;
}
input{
  border-radius: 8px;
}
button {
  outline: none;
  border: 1px solid #577C8A;
  border-radius: 20px;
  background-color: #577C8A;
  padding: 10px 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  transition: transform 85ms ease-in;
}
h1 {
  text-transform: capitalize;
  font-size: 30px;
}
p{
  margin: 10px 0 30px;
}
button:active {
  transform: scale(.95);
}
.ghost {
  background-color: transparent;
  border-color: white;
}


.container{
  position: relative;
  width: 768px;
  top: 120px;
  left: 400px;
  max-width: 100%;
  min-height: 480px;
  background-color: white;
  box-shadow:  0 10px 10px rgba(0, 0, 0, .22);
  border-radius: 13px;
  overflow: hidden;
}

.form-container{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 50%;
  padding: 0 40px;
}
.form-container form{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-container input {
  width: 100%;
  height: 40px;
  margin: 8px 0;
  background-color: #EEEEEE;
  border: none;
  font-size: 14px;
  padding: 0 20px;
}
.sign-in-container{
  z-index: 10;
}

.social-container a{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  line-height: 40px;
  text-align: center;
  color: #333;
  margin: 20px 8px;
}
.social-container a:hover {
  background-color: #222F3E;
  color: white;
  border-color: #CBCBCC;
}

.overlay-container {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color:#577C8A;
  overflow: hidden;
  z-index: 100;
}
.overlay {
  position: absolute;
  display: flex;
  left: -100%;
  width: 200%;
  height: 100%;
}

.overlay-penal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 40px;
  text-align: center;
  color: white;
  font-size: 12px;
}
.forget {
  height: 20px;
  color: #9AA9B7;
  text-decoration: none;
  margin: 5px 0 15px;
  font-size: 12px;
  text-transform: capitalize;
}
.forget:hover {
  border-bottom: 2px #66BAB7 solid;
}
.login{
  background-size:cover;
  background-image: url("../../assets/back.jpg");
  background-position: center;
  height: 735px;
}

</style>

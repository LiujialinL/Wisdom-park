<template>
  <div class="login-wrapper">
    <div class="model">
      <div class="title">火星</div>
      <el-form
        ref="LoginRef"
        :model="loginForm"
        class="demo-ruleForm"
        :rules="loginRules"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="loginForm.userName"
            type="text"
            autocomplete="off"
            placeholder="请输入用户名"
          >
            <el-icon :size="size" :color="color"><User /></el-icon>
          </el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            v-model="loginForm.userPwd"
            type="text"
            autocomplete="off"
            placeholder="请输入密码"
          >
            <el-icon :size="size" :color="color"><View /></el-icon>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="LoginGoNext" style="width: 400px"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { User, View } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
// import UserApi from '../../api/user'
const size = ref('16px')
const color = ref('#c0c4cc')
const store = useStore()
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
const LoginRef = ref()
const loginRules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const LoginGoNext = () => {
  LoginRef.value.validate(async (valid) => {
    if (!valid) return
    const response = await store.dispatch('user/login', loginForm)
    console.log(response)
  })
  // UserApi.login(loginForm).then((res) => {
  //   console.log(res)
  // })
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
  .model {
    width: 500px;
    height: 392.6px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgb(199, 201, 203, 0.3);
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .el-input {
      width: 400px;
      height: 40.8px;
      ::before {
        content: '';
        display: inline-block;
        width: 25px;
        height: 25px;
      }

      .el-input__inner {
        margin-left: 20px;
      }
    }
  }
}
</style>

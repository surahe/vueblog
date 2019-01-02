<template>
  <section class="login-dialog">
    <h2 class="title">注册</h2>
    <el-input v-model="username" class="dialog-input" placeholder="用户名" />
    <el-input v-model="password" class="dialog-input" placeholder="密码" />
    <el-input v-model="re_password" class="dialog-input" placeholder="确认密码" />
    <el-input v-model="email" class="dialog-input" placeholder="电子邮箱" />
    <el-input v-model="code" class="dialog-input" placeholder="验证码" />
    <el-button class="login-btn" type="primary" @click="register">登录</el-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      re_password: '',
      email: '',
      code: ''
    }
  },
  methods: {
    register () {

    }
  },
}
</script>

<style lang="scss" scoped>
  .login-dialog {
    width: 400px;
    margin: 100px auto 0;
    .title {
      text-align: center;
    }
    .dialog-input {
      margin-bottom: 20px;
    }
    .login-btn {
      width: 100%;
    }
  }
</style>

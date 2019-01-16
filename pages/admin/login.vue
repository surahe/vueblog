<template>
  <section class="login-dialog">
    <h2 class="title">登录</h2>
    <el-input v-model="username" class="username-input" placeholder="用户名" />
    <el-input v-model="password" class="password-input" type="password" placeholder="密码" />
    <el-button class="login-btn" type="primary" @click="login">登录</el-button>
  </section>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/signin', {
        username: this.username,
        password: this.password
      })
      .then((response) => {
        alert('登录成功')
        console.log(response)
      })
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
    .username-input {
      margin-bottom: 10px;
    }
    .password-input {
      margin-bottom: 30px;
    }
    .login-btn {
      width: 100%;
    }
  }
</style>

<template>
  <section class="login-dialog">
    <h2 class="title">注册</h2>
    <el-form ref="form" :model="form" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="form.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="form.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="form.nickname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="form.email" />
        <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
        <span class="status">{{ statusMsg }}</span>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="form.code" maxlength="4" />
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="register">提交</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
let countDown = 60

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      statusMsg: '',
      timerId: null,
      form: {
        username: '',
        password: '',
        checkPass: '',
        nickname: '',
        email: '',
        code: ''
      },
      rules: {
        username: [{
          required: true,
          type: 'string',
          message: '请输入账号',
          trigger: 'blur'
        }],
        nickname: [{
          required: true,
          type: 'string',
          message: '请输入昵称',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          validator: validatePass,
          message: '创建密码',
          trigger: 'blur'
        }],
        checkPass: [{
          required: true,
          validator: validatePass2,
          message: '确认密码',
          trigger: 'blur'
        }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        code: [{
          required: true,
          type: 'string',
          message: '请输入验证码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    register () {
      let self = this
      this.$refs['form'].validate((valid) => {
        if (valid) {
          self.$store.dispatch('user/register', {
            username: self.form.username,
            password: self.form.password,
            email: self.form.email,
            nickname: self.form.nickname,
            code: self.form.code
          }).then((data) => {
            if (data && data.errorCode === 0) {
              window.location.href = '/admin/login'
            } else {
              alert(data.message)
            }
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    sendMsg () {
      const self = this
      let namePass
      let emailPass
      if (self.timerId) {
        return false
      }
      this.$refs['form'].validateField('username', (valid) => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs['form'].validateField('email', (valid) => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        this.$store.dispatch('user/verify', {
          username: encodeURIComponent(self.form.username),
          email: self.form.email
        }).then((data) => {
          if (data && data.errorCode === 0) {
            self.statusMsg = `验证码已发送，剩余${countDown--}秒`
            self.timerId = setInterval(() => {
              self.statusMsg = `验证码已发送，剩余${countDown--}秒`
              if (countDown < 0) {
                clearInterval(self.timerId)
                self.statusMsg = ''
                self.timerId = null
                countDown = 60
              }
            }, 1000);
          } else {
            self.statusMsg = data.message
          }
        }).catch(err => {
          console.log(err)
        })
      }
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
    .login-btn {
      width: 100%;
    }
  }
</style>

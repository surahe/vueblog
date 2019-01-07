'use strict';

const User = require('../service/user')
const superstruct = require('superstruct')
const nodeMailer = require('nodemailer')
const Redis = require('../utils/redis')
const Passowrd = require('../utils/passport')
const config = require('../config')
const tools = require('../utils/tools')
const errorCode = require('../config/errorCode')
const {resData} = require('../utils/tools')

const service = {
  register: async (req, res, next) => {
    const {
      username,
      password,
      nickname,
      email,
      code
    } = req.body
    const format = superstruct.struct({
      username: 'string',
      password: 'string',
      nickname: 'string',
      email: 'string',
      code: 'string'
    })
    try {
      format(req.body)
      if (code) {
        const saveCode = await Redis.hget(`nodemail:${username}`, 'code')
        const saveExpire = await Redis.hget(`nodemail:${username}`, 'expire')
        if (code === saveCode) {
          if (new Date().getTime() - saveExpire > 0) {
            res.json(resData(
              errorCode.error,
              {message: '验证码已过期'}
            ))
            return false
          }
        } else {
          res.json(resData(
            errorCode.error,
            {message: '请输入正确的验证码'}
          ))
          return false
        }
      } else {
        res.json(resData(
          errorCode.error,
          {message: '请输入填写验证码'}
        ))
        return false
      }
      let user = await User.findOne({
        username
      })
      if (user) {
        res.json(resData(
          errorCode.error,
          {message: '该用户已被注册'}
        ))
        return
      }
      let newUser = await User.create({username, password, email, nickname})
      if (newUser) {
        res.json(resData(
          errorCode.success,
          {message: '注册成功'}
        ))
        return false
      } else {
        res.json(resData(
          errorCode.error,
          {message: '注册失败'}
        ))
        return false
      }
    } catch (err) {
      res.json(resData(
        errorCode.invalid_parameter,
        {message: err.message}
      ))
    }
  },
  signin: async (req, res, next) => {
    return Passowrd.authenticate('local', function (err, user, info, status) {
      if (err) {
        res.json(resData(
          errorCode.error,
          {message: err}
        ))
      } else {
        if (user) {
          return req.login(user, function (err) {
            if (err) {
                return next(err)
            }
            console.log(req.session)
            res.json(resData(
              errorCode.success,
              {message: '登录成功', user}
            ))
          })
        } else {
          res.json(resData(
            errorCode.error,
            { message: info}
          ))
        }
      }
    })(req, res, next)
  },
  verify: async (req, res, next) => {
    let username = req.body.username
    const saveExpire = await Redis.hget(`nodemail:${username}`, 'expire')

    if (saveExpire && new Date().getTime() - saveExpire < 0) {
      res.json(resData(
        errorCode.error,
        {message: '验证码请求过于频繁，请稍后重试'}
      ))
      return false
    }
    let transporter = nodeMailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: false,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.passport
      }
    })
    let ko = {
      code: tools.AuthCode(),
      expire: tools.expireTime(1),
      email: req.body.email,
      user: req.body.username
    }
    let mailOptions = {
      from: `验证邮件<${config.smtp.user}>`,
      to: ko.email,
      subject: 'vueblog注册码',
      html: `邀请码是${ko.code}`
    }
    Redis.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    await transporter.sendMail(mailOptions, (error, info) => { 
      if (error) {
        return console.log('error')
      } else {
        Redis.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email )
      }
    })
    res.json(resData(
      errorCode.success,
      {message: '验证码已发送'}
    ))
  },
  exit: async (req, res, next) => {
    await req.logout()
    if (!req.isAuthenticated()) {
      res.json(resData(
        errorCode.success,
        {message: '退出成功'}
      ))
    } else {
      res.json(resData(
        errorCode.error,
        {message: '退出失败'}
      ))
    }
  },
  getUserInfo: (req, res, next) => {
    if (req.isAuthenticated()) {
      const {username, email} = req.session.passport.user
      res.json(resData(
        errorCode.success,
        {data: {username, email}}
      ))
    } else {
      res.json(resData(
        errorCode.success,
        {data: {username: '', email: ''}}
      ))
    }
  }
}

module.exports = service
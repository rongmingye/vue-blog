import  jwt from 'jsonwebtoken'; // 引入验证jsonwebtoken模块
import { expressJwt } from 'express-jwt'; // 引入express-jwt模块
import {PRIVATE_KEY} from '../utils/constant.js'

// 验证token是否过期
const jwtAuth = expressJwt({
  secret: PRIVATE_KEY, // 设置密钥
  credentialsRequired: true, // 设置为true表示校验，false表示不校验
  // 自定义获取token的函数
  getToken: (req) => {
    if (req.headers.token) {
      return req.headers.token
    } else if (req.query && req.query.token) {
      return req.query.token
    }
  }
  // 设置jwt认证白名单，比如/api/login登录接口不需要拦截
}).unless({
  path: [
    '/',
    '/api/login',
    '/api/register',
    '/api/resetPwd'
  ]
})

// jwt-token解析
function decode(req) {
  const token = req.get('token')
  return jwt.verify(token, PRIVATE_KEY);
}

module.exports = {
  jwtAuth,
  decode
}

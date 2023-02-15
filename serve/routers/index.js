

import express from 'express'
import { jwtAuth, decode } from '../utils/jwt'; // 引入jwt认证函数

import * as userRouter from './user'
import * as articleRouter from './article'
import * as collectionRouter from './collection'

const router = express.Router(); // 注册路由 

router.use(jwtAuth); // 注入认证模块

router.use('/api', userRouter);
router.use('/api', articleRouter);
router.use('/api', collectionRouter);

// 自定义统一异常处理中间件，需要放在代码最后
router.use((err, req, res, next) => {
  console.log('err===', err);

  // 自定义用户认证失败的错误返回  
  if (err && err.name === 'UnauthorizedError') {
    const { status = 401, message } = err;
    // 抛出401异常
    res.status(status).json({
      code: status,
      msg: 'token失效，请重新登录',
      data: null
    })
  } else {
    const { output } = err || {};
    // 错误码和错误信息
    const errCode = (output && output.statusCode) || 500;
    const errMsg = (output && output.payload && output.payload.error) || err.message;
    
    res.status(errCode).json({
      code: errCode,
      msg: errMsg
    })
  }
})

export default  router
import express from 'express'
import service from '../services/userService.js'

const router = express.Router(); // 注册路由 

router.post('/login', service.login)


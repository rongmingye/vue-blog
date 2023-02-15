
import express from 'express'
import service from '../services/collectionService.js'

const router = express.Router(); // 注册路由 

// 发布收藏
router.post('/collection/add', service.addColletion)

// 修改收藏
router.post('/collection/update', service.updateColletion)

// 查询收藏列表
router.post('/collection/list', service.delectCollection)

// 根据id查询收藏
router.post('/collection/detail/${id}', service.getColletionList)

// 删除收藏
router.post('/collection/delete/${id}', service.getColletionById)

export default router
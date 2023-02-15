import express from 'express'
import service from '../services/articleService.js'

const router = express.Router()

// 发布文章
router.post('/article/add', service.addArticle)

// 修改文章
router.post('/article/update/${id}', service.updateArticle)

// 删除文章
router.post('/article/delete/${id}', service.deleteArticle)

// 查询文章列表
router.get('/article/list', service.getArticleList)

// 查询文章详情
router.get('/article/detail/${id}', service.getArticleById)

// 阅读加一
router.post('/article/read/add', service.addArticleReadNum)

export default router

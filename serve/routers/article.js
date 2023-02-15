import service from '../services/articleService.js'

export function router (app){

	// 发布文章
	app.post('/article/add', service.addArticle)

	// 修改文章
	app.post('/article/update/${id}', service.updateArticle)

	// 删除文章
	app.post('/article/delete/${id}', service.deleteArticle)

	// 查询文章列表
	app.get('/article/list', service.getArticleList)

	// 查询文章详情
	app.get('/article/detail/${id}', service.getArticleById)

	// 阅读加一
	app.post('/article/read/add', service.addArticleReadNum)
}

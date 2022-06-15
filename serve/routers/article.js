import query from '../mysql.js'
import * as response from '../common/response.js'
import db from '../db'

export function router (app){

	// 发布文章
	app.post('/article/add', function(req, res){
		let request = req.body
		query(db.addArticle(request), function(err, result){
			if(err){ console.log(err) }

			res.send(response.success())
			res.end()
		})
	})

	// 修改文章
	app.post('/article/update/${id}', function(req, res){
		let request = req.body
		query(db.updateArticle(request.id), function(err, result){
			if(err){ console.log(err) }

			res.send(response.success())
			res.end()
		})
	})

	// 删除文章
	app.post('/article/delete/${id}', function(req, res){
		let request = req.body
		query(db.deleteArticle(request.id), function(err, result){
			if(err){ console.log(err) }

			res.send(response.success())
			res.end()
		})
	})

	// 查询文章
	app.get('/article/list', function(req, res){
		let request = req.body
		query(db.getArticleList(request), function(err, result){
			if(err){ console.log(err) }

			result.map((item, i)=>{
				item.tags = JSON.parse(item.tags)
			})

			res.send(response.success(result))
			res.end()
		})
	})

	// 查询文章详情
	app.get('/article/detail/${id}', function(req, res){
		let request = req.body
		query(db.getArticleById(request.id), function(err, result){
			if(err){ console.log(err) }

			result.map((item, i)=>{
				item.tags = JSON.parse(item.tags)
			})

			res.send(response.success(result[0]))
			res.end()
		})
	})

	// 阅读加一
	app.post('/article/read/add', function(req, res){
		let request = req.body
		query(db.getArticleById(request.id), function(err, result){
			if(err){ console.log(err) }
			console.log(result)
			query(db.addReadNum(request.id, parseInt(result[0].readNum+1)), function(err, result){

				res.send(response.success(result[0]))
				res.end()
			})
		})
	})
}

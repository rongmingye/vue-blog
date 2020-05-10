var query = require('./mysql.js');
var bodyparser = require('body-parser');
var urlencodeParser = bodyparser({extended: false});

function router(app){
	//根据类型查询文章
	app.post('/getArticleList', urlencodeParser, function(req, res){
		console.log('getArticleList');
		var request = req.body;
		var sql = "select * from article where art_type ='"+request.type+"'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			result.map((item, i)=>{
				item.tags = JSON.parse(item.tags);
			})

			var data = {
				code: 1,
				result: result,
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	// 根据id查询文章
	app.post('/getArticleById', urlencodeParser, function(req, res){
		console.log('getArticleById');
		var request = req.body;
		var sql = "select * from article where id ='"+request.id+"'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			result.map((item, i)=>{
				item.tags = JSON.parse(item.tags);
			})

			var data = {
				code: 1,
				result: result[0],
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	// 根据id查询收藏
	app.post('/getColletionById', urlencodeParser, function(req, res){
		console.log('getColletionById');
		var request = req.body;
		var sql = "select * from colletion where id ='"+request.id+"'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: result[0],
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	//查询热门文章
	app.post('/getHotArticle', urlencodeParser, function(req, res){
		console.log('getHotArticle');
		var request = req.body;
		var sql = "select * from article where is_hot ='"+request.hot+"'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			result.map((item, i)=>{
				item.tags = JSON.parse(item.tags);
			})

			var data = {
				code: 1,
				result: result,
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	
	//查询文章列表，按时间排序
	app.post('/getArticleListByDate', urlencodeParser, function(req, res){
		console.log('getArticleListByDate');
		var request = req.body;
		var sql = "select * from article";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var _result = []
			result.map((item, i)=>{
				item.tags = JSON.parse(item.tags);
				_result.unshift(item);
			})

			var data = {
				code: 1,
				result: _result,
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	//查询收藏
	app.post('/getColletionList', urlencodeParser, function(req, res){
		console.log('getColletionList');
		var request = req.body;
		var sql = "select * from colletion";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: result,
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	// 阅读加一
	app.post('/addReadNum', urlencodeParser, function(req, res){
		console.log('addReadNum');
		var request = req.body;
		var sql = "select readNum from article where id='"+request.id+"'";
		query(sql, function(err, result){
			if(err){ console.log(err); }
			console.log(result);
			var sql2 = "update article set readNum ='"+parseInt(result[0].readNum+1)+"' where id='"+request.id+"'";
			query(sql2, function(err, result){
				var data = {
					code: 1,
					result: result[0],
					msg: ""
				}
				res.send(data);
				res.end();
			});
		})
	})
}

module.exports = router;
var query = require('./mysql.js');
var bodyparser = require('body-parser');
var urlencodeParser = bodyparser({extended: false});
var date = require('./date.js');

function routerManage(app){
	//发布文章
	app.post('/publishArticle', urlencodeParser, function(req, res){
		console.log('publishArticle');
		var request = req.body;
		var sql = "insert into article(title, description, content, art_type, createTime, author, is_hot, tags) values ('" 
		+request.title+"','"+request.desc+"','"+request.content+"','"+request.type+"','"
		+date.currentDate()+"','O叶','"+request.hot+"','"+JSON.stringify(request.tags)+"')";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: "success",
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	 // 发布收藏
	app.post('/publishColletion', urlencodeParser, function(req, res){
		console.log('publishColletion');
		var request = req.body;
		var sql = "insert into colletion(colletion_title, colletion_desc, colletion_link) values ('" 
		+request.title+"','"+request.desc+"','"+request.link+"')";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: "success",
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	// 查询管理文章
	app.post('/getManageData', urlencodeParser, function(req, res){
		console.log('getManageData');
		var request = req.body;
		var sql = "select * from " + request.type;
		query(sql, function(err, result){
			if(err){ console.log(err); }

			/*result.map((item, i)=>{
				item.tags = JSON.parse(item.tags);
			})*/

			var data = {
				code: 1,
				result: result,
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	// 删除文章或收藏
	app.post('/deleteData', urlencodeParser, function(req, res){
		console.log('deleteData');
		var request = req.body;
		var sql = "delete from " + request.type + " where id='" + request.id+"'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: "success",
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	//修改文章
	app.post('/updateArticle', urlencodeParser, function(req, res){
		console.log('updateArticle');
		var request = req.body;
		var sql = "update article set title='"+request.title
		+ "',description='"+request.desc
		+ "',content='"+request.content
		+ "',art_type='"+request.type
		+ "',author='O叶',is_hot='"+request.hot
		+ "',tags='"+JSON.stringify(request.tags)+"' where id = '" + request.id + "'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: "success",
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})

	//修改收藏
	app.post('/updateColletion', urlencodeParser, function(req, res){
		console.log('updateColletion');
		var request = req.body;
		var sql = "update colletion set colletion_title='"+request.title
		+ "',colletion_desc='"+request.desc
		+ "',colletion_link='"+request.content
		+ "' where id = '" + request.id + "'";
		query(sql, function(err, result){
			if(err){ console.log(err); }

			var data = {
				code: 1,
				result: "success",
				msg: ""
			}
			res.send(data);
			res.end();
		})
	})
}

module.exports = routerManage;
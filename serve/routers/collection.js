import query from '../mysql.js'
import * as response from '../common/response.js'
import * as db from '../db'

export function router (app) {
	// 发布收藏
  app.post('/collection/add', function(req, res){
    let request = req.body
    query(db.addColletion(request), function(err, result){
      if(err){ console.log(err) }

      res.send(response.success())
      res.end()
    })
  })

	//修改收藏
	app.post('/collection/update', function(req, res){
		let request = req.body
		query(db.updateColletion(request), function(err, result){
			if(err){ console.log(err) }

			res.send(response.success())
			res.end()
		})
	})

  //查询收藏
  app.post('/collection/list', function(req, res){
    query(db.getColletionList(), function(err, result){
      if(err){ console.log(err) }

      res.send(response.success(result))
      res.end()
    })
  })

  // 根据id查询收藏
  app.post('/collection/detail/${id}', function(req, res){
    let request = req.body
    query(db.getColletionById(request.id), function(err, result){
      if(err){ console.log(err) }

      res.send(response.success(result[0]))
      res.end()
    })
  })

  // 删除收藏
  app.post('/collection/delete/${id}', function(req, res){
    let request = req.body
    query(db.delectCollection(request.id), function(err, result){
      if(err){ console.log(err) }

      res.send(response.success())
      res.end()
    })
  })
}
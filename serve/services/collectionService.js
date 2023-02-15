import query from '../mysql.js'
import db from '../db/index.js'
import * as response from '../common/response.js'

// 发布收藏
export function addColletion(req, res){
  query(db.addColletion(req.body), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success())
  })
}

// 修改收藏
export function updateColletion(req, res){
  query(db.updateColletion(req.parmas.id, req.body), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success())
  })
}

// 删除收藏
export function delectCollection(req, res){
  query(db.delectCollection(req.parmas.id), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success())
  })
}

// 查询收藏列表
export function getColletionList(req, res){
  query(db.getColletionList(req.body), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success(result))
  })
}

// 根据id查询收藏
export function getColletionById(req, res){
  query(db.getColletionById(req.parmas.id), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success(result[0]))
  })
}


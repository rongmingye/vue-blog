import query from '../mysql.js'
import db from '../db/index.js'
import * as response from '../common/response.js'

// 发布文章
export function addArticle(req, res){
  query(db.addArticle(req.body), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success())
  })
}

// 修改文章
export function updateArticle(req, res){
  query(db.updateArticle(req.params.id, req.body), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success())
  })
}

// 删除文章
export function deleteArticle (req, res){
  query(db.deleteArticle(req.params.id), function(err, result){
    if(err){ console.log(err) }

    res.json(response.success())
  })
}

// 查询文章列表
export function getArticleList(req, res){
  query(db.getArticleList(req.body), function(err, result){
    if(err){ console.log(err) }

    result.map((item, i)=>{
      item.tags = JSON.parse(item.tags)
    })

    res.json(response.success(result))
  })
}

// 查询文章详情
export function getArticleById(req, res){
  query(db.getArticleById(req.params.id), function(err, result){
    if(err){ console.log(err) }

    result.map((item, i)=>{
      item.tags = JSON.parse(item.tags)
    })

    res.json(response.success(result[0]))
  })
}

// 阅读加一
export function addArticleReadNum(req, res){
  query(db.getArticleById(req.body), function(err, result){
    if(err){ console.log(err) }

    query(db.addReadNum(req.id, parseInt(result[0].readNum+1)), function(err, result){
      if(err){ console.log(err) }

      res.json(response.success(result[0]))
    })
  })
}
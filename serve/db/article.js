export function addArticle(request) {
  return `insert into article(title, description, content, art_type, createTime, author, is_hot, tags) values 
  ('${request.title}',
  '${request.desc}',
  '${request.content}',
  '${request.type}',
  '${date.currentDate()}',
  'O叶',
  '${request.hot}"',
  '${JSON.stringify(request.tags)}')"`
}

export function updateArticle() {
  return `update article set 
  title='${request.title}', 
  description='${request.desc}',
  content='${request.content}',
  art_type='${request.type}'
  author='O叶',
  is_hot='${request.hot}'
  tags='${JSON.stringify(request.tags)}' 
  where id = '${request.id}'`
}

export function deleteArticle(id) {
  return `delete from article where id='${id}'`
}

export function getArticleList(request) {
  
   let sql = `select * from article`

   if (request.articleType) {
    sql += ` where articleType='${request.articleType}`
   }
   if (request.isHot) {
    sql += ` where isHot ${request.isHot}`
   }
   if (request.desc) {
    sql += ` where ORDER BY createTime DESC`
   }
  
    return sql
}

export function getArticleById(id) {
  return `select * from article where id ='${id}'`
}

export function addReadNum(id, readNum) {
  return `update article set readNum ='${readNum}' where id='${id}'`
}

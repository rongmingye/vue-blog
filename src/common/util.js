// 转义文章的 < >(标签) \n \r\n(换行) \t(tab)
export function articleFormat(article){
	article =  article.replace(/</g, "&lt;").replace(/>/g, "&gt;")
					  .replace(/\n|\r\n/g, '<br/>').replace(/\s/g, '&nbsp;')
					  .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp');
	return article;
}

// 插入数据库前，将数据'单引号转为"双引号
export function danyinhao(content){
	var reg=  new RegExp("'", "g")
	content = content.replace(reg, '"');
	return content;
}
const baseUrl = "http://localhost:8081";

module.exports = {
	getArticleList: baseUrl+'/getArticleList', // 通过type获取文章列表
	getArticleById: baseUrl+'/getArticleById', // 通过id获取文章
	getHotArticle: baseUrl+'/getHotArticle', // 热门文章
	getArticleListByDate: baseUrl+'/getArticleListByDate', //查询所有文章, 时间排序
	getColletionList: baseUrl+'/getColletionList', // 获取收藏列表
	addReadNum: baseUrl+ '/addReadNum',//阅读数量加一

	publishArticle: baseUrl+"/publishArticle", // 发布文章
	publishColletion: baseUrl+"/publishColletion", // 发布收藏
	getManageData: baseUrl+"/getManageData", // 获取管理的文章
	deleteData: baseUrl+"/deleteData", // 删除文章
	updateArticle: baseUrl+"/updateArticle", // 修改文章
	updateColletion: baseUrl+"/updateColletion", // 修改收藏
	getColletionById: baseUrl+'/getColletionById', // 通过id获取收藏
}
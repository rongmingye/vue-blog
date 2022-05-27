import axios from '@/config/axios.js'
import { header, header_file } from '@/config/header.js'

export default {
  // 通过type获取文章列表 // 所有，热门
	getArticleList: function () {
		return axios.get('article/list', header);
	},
	// 通过id获取文章 
	getArticleById: function (articleId) {
		return axios.get(`article/detail/${articleId}`, header);
	},
	//查询所有文章, 时间排序 
	getArticleListByDate: function () {
		return axios.get('getArticleListByDate', header);
	},
	// 发布文章 
	publishArticle: function (data) {
		return axios.get('article/public', data, header);
	},
	// 修改文章 
	updateArticle: function (articleId, data) {
		return axios.get(`article/update/${articleId}`, data, header);
	},
	// 删除文章 
	deleteData: function (articleId) {
		return axios.get(`article/delete/${articleId}`, { articleId }, header);
	},
	//阅读数量加一 
	addReadNum: function (articleId) {
		return axios.post('addReadNum', { articleId }, header);
	},
}
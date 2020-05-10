<!-- manage.vue 管理页面 -->

<template>
	<div id="manage">
		<div class="clearfix">
			<el-tabs v-model="activeName" @tab-click="handleTab" style="width:100px; float: left">
			    <el-tab-pane label="文章" name="article"></el-tab-pane>
			    <el-tab-pane label="收藏" name="colletion"></el-tab-pane>
			</el-tabs>
			<div style="float: right">
				<el-button size="small"><router-link to="/publishArticle">发布文章</router-link></el-button>	
				<el-button size="small"><router-link to="/publishColletion">发布收藏</router-link></el-button>	
			</div>
			
		</div>

		<el-table :data="manageList" style="width: 100%">
		    <el-table-column prop="title" label="标题" v-if="type=='article'"></el-table-column>
		    <el-table-column prop="colletion_title" label="标题" v-if="type=='colletion'"></el-table-column>

		    <el-table-column fixed="right" label="操作" width="100">
		      	<template slot-scope="scope">
		        	<el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
		        	<el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
		      	</template>
		    </el-table-column>
	    </el-table>
	</div>
</template>

<script>
	import {getManageData} from '../config/api.js'
	import {deleteData} from '../config/api.js'
	
	export default {
		data(){
			return {
				manageList: [],
				type: "article",
				activeName: "article",
			}
		},
		mounted: function(){
			this.$nextTick(function(){
				this.getManageData();
			})
		},
		methods: {
			// 根据文章类型，获取管理数据
			getManageData: function(){
				var params = {
					type: this.type
				}
				this.$http.post(getManageData, params).then(res=>{
					console.log(res.data);
					this.manageList = res.data.result;
				}).catch(err=>{
					console.log(err);
				})
			},
			handleTab: function(tab, event){
				this.type = tab.name;
				this.getManageData();
			},
			// 删除文章
			handleDelete: function(rows){
				var params = {
					type: this.type,
					id: rows.id
				}
				this.$http.post(deleteData, params).then(res=>{
					this.$message({message: "删除成功", customClass: "message"})
					this.getManageData();
				}).catch(err=>{
					console.log(err);
				})
			},
			// 编辑文章
			handleEdit: function(rows){
				var params = {
					path: this.type == "article"? "/publishArticle" : "/publishColletion",
					query: {
						id: rows.id
					}
				}
				this.$router.push(params);
			}
		}
	}	
</script>

<style>
.message{
	margin-top: 100px;
}
</style>
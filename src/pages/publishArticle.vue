<!-- publicArticle.vue 发布文章页面 -->

<template>
	<div id="publishArticle">
		<el-form :model="form" label-width="80px" :rules="rules" ref="publishForm">
			<el-form-item label="文章标题" prop="title">
			    <el-input v-model="form.title"></el-input>
			</el-form-item>

			<el-form-item label="文章描述" prop="description">
			    <el-input type="textarea" v-model="form.description" rows="5"></el-input>
			</el-form-item>

			<el-form-item label="文章类型" prop="art_type">
				<el-select v-model="form.art_type" placeholder="文章类型">
				      <el-option label="home" value="home"></el-option>
				      <el-option label="talk" value="talk"></el-option>
			    </el-select>
			</el-form-item>

			<el-form-item label="是否热门">
    			<el-switch v-model="form.is_hot"></el-switch>
  			</el-form-item>

			<el-form-item label="文章内容" prop="content">
			    <el-input type="textarea" v-model="form.content" rows="50"></el-input>
			</el-form-item>
			
			<el-form-item label="文章标签" prop="tags">
			    <el-input v-model="form.tags"></el-input>
			    <span style="color: #999">用逗号"," 分隔标签</span>
			</el-form-item>

			<el-form-item>
			    <el-button type="primary" @click="onSubmit('publishForm')">提交</el-button>
			    <el-button @click="resetForm('publishForm')">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {publishArticle} from '../config/api.js'
	import {getArticleById} from '../config/api.js'
	import {updateArticle} from '../config/api.js'
	import {danyinhao} from '../common/util.js'

	export default {
		mounted: function(){
			this.$nextTick(function(){
				if(this.$route.query.id){
					this.getArticleData();
				}
			});
		},
		data(){
			return {
				form:{
					title: "",
					description: "",
					content: "",
					art_type: "",
					is_hot: true,
					tags: ""
				},
				rules: {
					title: [{required: true, message: '请输入标题'}],
					description: [{required: true, message: '请输入描述'}],
					content: [{required: true, message: '请输入内容'}],
					art_type: [{required: true, message: '请输入类型'}],
					tags: [{required: true, message: '请输入标签'}]
				}
			}
		},
		methods: {
			// 提交表单，如果有route.query.id则是编辑，否则是发布
			onSubmit: function(formname){
				this.$refs[formname].validate((valid)=>{
					if(valid){
						if(this.$route.query.id){
							this.updateArticle();
						}else{
							this.publishArticle();
						}
					}else{
						return false;
					}
				})	
			},
			//重置表单
			resetForm: function(formname){
				this.$refs[formname].resetFields();
			},
			// 发布文章
			publishArticle: function(){
				var params = {
					title: this.form.title,
					desc: this.form.description,
					content: danyinhao(this.form.content),
					type: this.form.art_type,
					hot: this.form.is_hot,
					tags: this.form.tags.indexOf(",") == -1? new Array(this.form.tags): this.form.tags.split(","),
				}
				this.$http.post(publishArticle, params).then(res=>{
					if(res.data.code == 1){
						this.$message({message:"发布成功", customClass: "message"});
					}
				}).catch(err=>{
					console.log(err);
				})
			},
			// 获取文章，用来修改文章，先填充内容
			getArticleData: function(){
				var params =  {
					id: this.$route.query.id
				}
				this.$http.post(getArticleById, params).then(res=>{
					this.form = res.data.result;
					this.form.tags = res.data.result.tags.join(',');
					this.form.is_hot =  res.data.result.is_hot == "true"? true : false;
				}).catch(err=>{
					console.log(err);
				})
			},
			// 提交编辑文章
			updateArticle: function(){
				var params = {
					id: this.$route.query.id,
					title: this.form.title,
					desc: this.form.description,
					content: danyinhao(this.form.content),
					type: this.form.art_type,
					hot: this.form.is_hot,
					tags: this.form.tags.indexOf(",") == -1? new Array(this.form.tags): this.form.tags.split(","),
				}
				this.$http.post(updateArticle, params).then(res=>{
					if(res.data.code == 1){
						this.$message({message:"修改成功", customClass: "message"});
					}
				}).catch((err)=>{
					console.log(err);
				})
			},
		},
	}
</script>

<style>
.message{
	margin-top: 100px;
}
</style>
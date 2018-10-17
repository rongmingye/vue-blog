<!-- publishColletion.vue 发布收藏页面 -->

<template>
	<div id="publishColletion">
		<el-form :model="form" label-width="80px" :rules="rules" ref="publishForm">
			<el-form-item label="标题" prop="colletion_title">
			    <el-input v-model="form.colletion_title"></el-input>
			</el-form-item>

			<el-form-item label="描述" prop="colletion_desc">
			    <el-input type="textarea" v-model="form.colletion_desc" rows="5"></el-input>
			</el-form-item>
			
			<el-form-item label="链接" prop="colletion_link">
			    <el-input v-model="form.colletion_link"></el-input>
			</el-form-item>
			
			<el-form-item>
			    <el-button type="primary" @click="onSubmit('publishForm')">提交</el-button>
			    <el-button @click="resetForm('publishForm')">取消</el-button>
			</el-form-item>

		</el-form>
	</div>
</template>

<script>
	import {publishColletion} from '../config/api.js'
	import {getColletionById} from '../config/api.js'
	import {updateColletion} from '../config/api.js'

	export default {	
		mounted: function(){
			this.$nextTick(function(){
				if(this.$route.query.id){
					this.getColletion();
				}
			});
		},
		data(){
			return {
				form:{
					colletion_title: "",
					colletion_desc: "",
					colletion_link: "",
				},
				rules: {
					colletion_title: [{required: true, message: '请输入标题'}],
					colletion_desc: [{required: true, message: '请输入描述'}],
					colletion_link: [{required: true, message: '请输入链接'}],
				}
			}
		},
		methods: {
			// 提交表单，如果有route.query.id则是编辑，否则是发布
			onSubmit: function(formname){
				this.$refs[formname].validate((valid)=>{
					if(valid){
						if(this.$route.query.id){
							this.updateColletion();
						}else{
							this.publishColletion();
						}
						
					}else{
						return false;
					}
				})	
			},
			
			resetForm: function(formname){
				this.$refs[formname].resetFields();
			},
			// 发布收藏
			publishColletion: function(){
				var params = {
					title: this.form.title,
					desc: this.form.desc,
					link: this.form.link
				}
				this.$http.post(publishColletion, params).then(res=>{
					console.log(res);
					if(res.data.code == 1){
						this.$message({message:"发布成功", customClass: "message"});
					}
				}).catch(err=>{
					console.log(err);
				})
			},
			// 获取收藏内容，用于编辑文章
			getColletion: function(){
				var params =  {
					id: this.$route.query.id
				}
				this.$http.post(getColletionById, params).then(res=>{
					this.form = res.data.result;
				}).catch(err=>{
					console.log(err);
				})
			},
			// 提交编辑收藏
			updateColletion: function(){
				var params = {
					id: this.$route.query.id,
					title: this.form.colletion_title,
					desc: this.form.colletion_desc,
					link: this.form.colletion_link
				}
				this.$http.post(updateColletion, params).then(res=>{
					if(res.data.code == 1){
						this.$message({message:"修改成功", customClass: "message"});
					}
				}).catch((err)=>{
					console.log(err);
				})
			},
		}
	}
</script>

<style>
.message{
	margin-top: 100px;
}
</style>
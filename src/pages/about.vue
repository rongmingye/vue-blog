<template>
	<div id="about">
		<div class="about-me">
			<div class="about-title">
				<span class="line"></span>
				<span class="title">about me</span>
				<span class="line"></span>
			</div>
			<div class="about-content">
				<p>O叶</p>
				<p>19届大四学生，前端代码的搬运工</p>
				<p>平时没事逛
					<a href="https://github.com/" target="_black">github</a>，
					<a href="http://react-china.org/" target="_blank">react中文社区</a>，
					<a href="https://www.csdn.net/" target="_blank">csdn</a>
				</p>
			</div>
		</div>
		<div class="about-blog">
			<div class="about-title">
				<span class="line"></span>
				<span class="title">about blog</span>
				<span class="line"></span>
			</div>
			<div class="about-content">
				<p>博客前端页面采用的技术：vue + axios + element-ui</p>
				<p>后端的技术：express + mysql</p>
			</div>
		</div>
		<div class="contact-me">
			<div class="about-title">
				<span class="line"></span>
				<span class="title">contact me</span>
				<span class="line"></span>
			</div>
			<div class="about-content">
				<p>
					<span>CSDN：</span> 
					<a href="https://blog.csdn.net/rongmingye" target="_blank">https://blog.csdn.net/rongmingye</a>
				</p>
				<p>
					<span>github：</span> 
					<a href="https://github.com/rongmingye" target="_blank">https://github.com/rongmingye</a>
				</p>
				<p>
					<span>微信号：</span> 15813158017
				</p>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style>
	#about{

	}
	#about .about-title{
		text-align: center;
	}
	#about .title{
		font-weight: bold;
		font-size: 24px;
		padding: 0 10px;
		vertical-align: middle;
		color: #686868;
	}
	#about .line{
		display: inline-block;
		width: 25%;
		border-top: 1px solid #ccc;
	}
	#about .about-content{
		
	}
	#about .about-content p{
		padding: 10px 0;
	}
	#about .about-content a{
		font-weight: bold;
		color: #2185d0;
		text-decoration: underline;
	}
</style>
<template>
  <div class="about">
    <div class="about-me">
      <div class="about-title">
        <span class="line"></span>
        <span class="title">about me</span>
        <span class="line"></span>
      </div>
      <div class="about-content">
        <p>O叶</p>
        <p>19年毕业，3年前端经验</p>
        <p>
          平时没事逛
          <a href="https://github.com/" target="_black">github</a>，
          <a href="http://react-china.org/" target="_blank">react中文社区</a>，
          <a href="https://www.csdn.net/" target="_blank">csdn</a>
          <a href="https://juejin.cn" target="_blank">掘金</a>
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
        <p>博客前端页面采用的技术：vue + axios + element-ui + less</p>
        <p>后端的技术：express + mysql</p>
      </div>
    </div>
    <div class="contact-me">
      <div class="about-title">
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="about-content">
        <p>
          <span>CSDN：</span>
          <a
            href="https://blog.csdn.net/rongmingye"
            target="_blank"
          >https://blog.csdn.net/rongmingye</a>
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
export default {
	name: 'about'
}
</script>

<style lang="less" scope>
.about {
  .about-title {
    text-align: center;
  }
  .title {
    font-weight: bold;
    font-size: 24px;
    padding: 0 10px;
    vertical-align: middle;
    color: #686868;
  }
  .line {
    display: inline-block;
    width: 25%;
    border-top: 1px solid #ccc;
  }
  .about-content {
    .about-content p {
      padding: 10px 0;
    }
    a {
      font-weight: bold;
      color: #2185d0;
      text-decoration: underline;
    }
  }
}
</style>
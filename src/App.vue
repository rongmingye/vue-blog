<!-- 主页布局结构 -->

<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>

      <el-container style="margin: 80px 100px 0 100px;">
        <el-main width="800px">
          <router-view></router-view>
        </el-main>

        <el-aside width="250px" style="margin-left: 20px">
          <Hot />
        </el-aside>
      </el-container>

      <el-footer style="text-align: center; font-size: 12px;">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Hot from "./components/hot.vue";

export default {
  name: "app",
  components: { Header, Footer, Hot }
};
</script>

<style>
#app {
}
.header {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  box-shadow: 0 1px 1px #ccc;
  background: #fff;
}
::-webkit-scrollbar {
  display: none;
}
</style>

<!-- 主页布局结构 -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
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
.main {
  width: 800px;
}

</style>

import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI); // 使用element-ui库

Vue.prototype.$http = axios; // 使用axios进行请求

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import Api from './config/api.js';
import store from './store/index.js';
// import mockApiList from'./common/mock'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/init.css';
import './assets/css/global.css';

Vue.config.productionTip = false;

Vue.use(ElementUI); // 使用element-ui库

Vue.prototype.$http = Api; // 使用axios进行请求

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

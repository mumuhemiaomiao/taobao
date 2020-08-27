import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 配置每一个组件可以使用vue-router
Vue.use(VueRouter);

import Vuex from 'vuex'
// 配置每一个实例对象都可以使用vuex语法
Vue.use(Vuex)
// 引入mintui
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

// 之前使用vue-resource 现在使用的是axios
import axios from 'axios';
Vue.prototype.$http = axios;

// 引入路由
import router from '../src/assets/js/router.js'

// 引入数据
import  store from '../src/assets/js/data.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

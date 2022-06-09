import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




// 引入axios
// 使用前提,安装模块: npm i axios vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 在axios使用前, 先配置基础路径
// axios.defaults.baseURL = 'http://www.codeboy.com:9999/data/'
Vue.use(VueAxios, axios)


// 引入swiper
// 集成swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


// 引入Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

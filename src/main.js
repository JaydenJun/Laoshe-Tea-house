import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




// 引入axios
// 使用前提,安装模块: npm i axios vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 在axios使用前, 先配置基础路径
axios.defaults.baseURL = 'http://47.110.235.8:3000'
Vue.use(VueAxios, axios)


// 引入moment
import moment from "moment"
Vue.prototype.moment=moment


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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//下面是自己添加的
import axios from './js/axios/ApiAxios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VCharts from 'v-charts'

Vue.config.productionTip = false
    //下面是自己添加的
Vue.prototype.$axios = axios;
Vue.use(mavonEditor)
Vue.use(VCharts)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
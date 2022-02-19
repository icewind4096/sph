import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入全局组件
import TypeNav from './pages/Home/TypeNav'

//使用全局组件 
//参数1: 全局组件的名字
//参数2：注册的全局组件类型 
Vue.component(TypeNav.name, TypeNav)

//引入路由
import router from '@/router'

new Vue({
  render: h => h(App),
  //注册路由
  router: router,
}).$mount('#app')

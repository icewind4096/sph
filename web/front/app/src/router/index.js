import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        // 重定向规则,如果只输入网站名，定向到Home页面
        { 
            path: '/', 
            redirect: '/home',
            // 路由原信息，类似于路由自定义参数
            meta: { showFooter: true }
        },
        {
            path: '/home',
            component: Home,
            meta: { showFooter: true }
        },
        {
            //第一种: 字符串方式
            path: '/search/:keyword',
            component: Search,
            meta: { showFooter: true },
            name: 'search'
        },
        {
            path: '/login',
            component: Login,
            meta: { showFooter: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { showFooter: false }
        },
    ]
})
# 尚品汇

##前端
### vue-cli脚手架初始化  
    node + webpack + 淘宝镜像  
    建立项目 `vue create 项目名称`  
### 项目说明
1. vue-cli项目目录
   ```text
    project  
        - node_moudles  项目依赖目录     
        - public        放置静态资源，在使用webpack进行打包的时候，会原封不动的放置到dist文件夹中
        - src           代码
        - assets        放置多个组件公用的静态资源，在使用webpack进行打包的时候，会把静态资源作为一个模块，打包到js文件中  
        - components    放置非路由组件或全局组件  
        - views/pages   放置路由组件
        - router        路由配置  
        App.vue         唯一的根组件, Vue中的组件全部以.vue作为扩展名  
        main.js         程序入口文件，项目中最先被执行的文件   
    babel.config.js     babel配置文件
    package.json        项目文件
    package-lock.json   缓存文件
    ```
2. 项目配置(package.json)
    2.1 项目运行时，自动打开浏览器
   ```json
        "scripts": {
        "serve": "vue-cli-service serve --open", 加入--open
        },
    ```
   2.2 关闭eslint校验功能，在根目录下创建vue.config.js文件
   ```javascript
        module.exports = {
            //关闭eslint
            "lintOnSave": false
        }
   ```   
   2.3 配置src目录的简写方式，在根目录下创建jsconfig.json文件，配置别名“@”作为目录简写字符，“@”等于src目录
   ```json
      {
        "compilerOptions": {
          "baseUrl": "./",
          "paths": {
            "@/*": ["src/*"]
                   }  
        },
        "exclude": ["node_modules", "dist"]     
      }  
    ``` 
3. 项目路由分析  
4. 安装依赖组件  
   4.1 安装less和less-loader,必须安装版本5.0  
   `npm install --save less less-loader@5 `  
   >如果组件识别less样式，必须在style标签上加上lang=less    
   `<style lang="less">`
5. 使用组件步骤  
   5.1 定义
   
   5.2 引入  
      import 组件名 from '组件文件/目录'
      ```javascript
         import Headder from './components/Header'
      ```
   5.3 注册  
      components: {  
         组件名  
      }  
      ```javascript
      components: {
         Header
      }
   ```
   5.4 使用
      <组件名></组件名>  
      ```javascript
         <Header></Header>
      ```
6. 路由搭建(vue-router)  
   6.1 安装   
   使用3.5.3版本，高版本的有问题  
   `npm install --save vue-router@3.5.3 `    
   6.2 配置路由  
      项目中配置的路由，一般放置在router目录中，配置文件为index.js, 具体配置，详见index.js  
      6.2.1 引入/注册路由
         在main.js中，引入路由  
         ```javascript
            //引入路由
            import router from '@/router'
            
            new Vue({
            render: h => h(App),
            //注册路由
            router: router,
            }).$mount('#app')
         ```
      6.2.2 使用路由出口
      在app.vue中，使用路由出口  
      ```javascript
         <template>
           <div>
             <Header></Header>
             <!-- 路由组件出口的地方 -->
             <router-view></router-view>
             <Footer></Footer>
           </div>
         </template>
      ```
   6.3 路由跳转方式  
      6.3.1 声明式跳转 router-link
      ```javascript
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
      ```
      >声明式导航：必须要有to属性  

      6.3.2 编程式跳转 使用push|replace进行跳转  
      ```javascript 
      this.$router.push('/search')
      ```
   6.4 路由原信息(类似于路由自定义参数)  
      6.4.1 定义路由原信息
      ```javascript
       routes: [
           // 重定向规则,如果只输入网站名，定向到Home页面
           { 
               // 路由原信息，类似于路由自定义参数
               meta: { showFooter: true },
           },
      ```
      6.4.2 使用路由原信息
      ```javascript
          <Footer v-if="$route.meta.showFooter == true"></Footer>
      ```
##后端

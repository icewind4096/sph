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
        - components    放置的是非路由组件货全局组件  
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
##后端

1、新建英文名字文件夹
2、在文件夹下 初始化vue init  webpack-simple
3、下包npm install /cnpm install
4、打开项目 npm  run  dev

5、下载包的时候，可以去使用淘宝镜像 
首先安装 npm install -g cnpm --registry=https://registry.npm.taobao.org
下载的时候，把npm换成cnpm


主入口是app.vue
main.js放置各种配置文件

一个vue相当于是一个组件
vue包含了
    template放置模板
    script放置js
    style放置css

src源文件

package.json放置各种包，
下载vue-router npm  i  vue-router -S

import 自己命名 from 路径/如果是文件包，直接书写文件名字

export导出数据

<style  scoped>限制css只在当前vue有效


结构类似做一个
1、登录和注册
2、列表页面
3、详情页

项目写完，需要打包 打包完了以后，可以直接通过index.html打开
npm  run build
/* 打包之前需要修改两处文件 */
index.html中的<script src="dist/build.js"></script>
 webpack.config.js   publicPath: 'dist/',



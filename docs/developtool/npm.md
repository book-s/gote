# NPM

::: tip 下载最新Node
最新版本Node https://nodejs.org/en/ 安装Node完成后自动安装好NPM
:::

```linx
# 查看源地址命令
npm config get registry

# 临时使用淘宝源
npm --registry https://registry.npm.taobao.org install node-red-contrib-composer@latest

# 全局配置切换到淘宝源
npm config set registry https://registry.npm.taobao.org

# npm清空缓存
npm cache clean -f

# 自动全局更新到最新版本
sudo npm install npm@latest -g

# cnpm全局安装
npm install -g cnpm --registry=https://registry.npm.taobao.org

# proxy代理
npm config delete proxy
npm config set https-proxy
```

::: tip NPM常用命令
npm -v 通过查看版本，看npm是否安装成功

npm install Module Name 使用npm命令安装模块

npm install Module Name -g 可以直接在命令行里使用

npm list -g 查看所有全局安装的模块

npm list vue 查看某个模块的版本号

npm -g install npm@5.9.1 （@后跟版本号）这样我们就可以更新npm版本

npm install -save moduleName -save在package文件的dependencies节点写入依赖

npm install -save-dev noduleName -save-dev在package文件的devDependencies节点写入依赖

dependecies: 运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies 开发时候的依赖，里面的模块时开发时用的，发布时用不到它，比如项目中使用的gulp、压缩css、js的模块。这些模块在我们的项目部署后是不需要的。
:::
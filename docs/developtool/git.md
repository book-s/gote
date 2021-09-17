# Git配置
::: tip 常用命令
- 配置`git config -l`
- Git系统配置`git config --system --list`
- Git本地全局配置`git config --global --list`
>.Gitconfig文件在Linux或MacOSX系统的用户目录下
>```sh
>git本地必须配置信息
>git config --global user.name "name"
>git config --global user.email "book_s@126.com"
>```
:::

# Git基本理论（核心）
Git本地有三个工作区域和一个远程仓库
- 工作目录（Working Directory）
- 暂存区（Stage/Index)
- 资源库（Repository或Git Directory)
- 远程Git仓库（Remote Directory)


```language
git status               // 查看所有文件状态
git init                 // 初始化
git add .                // 添加所有屋内按到暂存区
git add -A               // 
git commit -m "消息内容"  // 提交暂存区内容到本地仓库 -m 提交信息
git checkout             // 撤销提交
git reset                // 
git push                 // 提交到本地仓库或远程仓库
git pull                 // 拉取本地仓库最新版本
```
忽略不需要的上传的文件
.gitignore 
```language
*.txt           // 忽略所有带txt文件内容
node_modules/   // 忽略文件/目录内所有内容
.DS_Store       // 忽略文件内容
/abc            // 忽略/文件前目录所有内容
```
set -e

# 生成静态文件
yran run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'


# git push -f git@github.com:book-s/Notes.git master


git push -f git@github.com:book-s/gote.git master:gh-pages
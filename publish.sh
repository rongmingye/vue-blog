#!/bin/bash

echo "publish start"

# 切换到生产分支
git checkout master

# 拉取最新代码
git pull

# 打包
npm run build

# 将打包目录复制到线上目录
cp -r ./dist/* /usr/project_online/fe/vue-blog/

echo "publish success"
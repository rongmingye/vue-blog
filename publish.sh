#!/bin/bash

echo "publish start"

# 切换到生产分支
git checkout master

# 拉取最新代码
git pull

# 打包
npm run build

# 删除旧的生产包
rm -rf /usr/project_online/fe/vue-blog/*

# 将打包目录复制到生产包
cp -r ./dist/* /usr/project_online/fe/vue-blog/

echo "publish success"
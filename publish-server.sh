echo "#### publish-server start ####"

# 切换到生产分支
git checkout master

# 拉取最新代码
git pull

# 安装依赖
npm i

# 启动服务，server监听8090端口
pm2 start server.js

echo "#### publish-server success ####"
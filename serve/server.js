
import express from 'express'
import cors from 'cors'
import logger from'morgan'
import compression from'compression'
import bodyParser from 'body-parser'
import routers from'./routers'

const app = express()

// 注册中间件
app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.urlencoded({extended: true})); // 解析form表单提交的数据application/x-www-form-urlencoded
app.use(logger()) // 日志
// 跨域
app.use(cors({
    credentials: true, 
    origin: "*" 
}))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(compression()) // gzip格式压缩
app.use(express.static(__dirname))

// babel
require("@babel/register")({
    presets: ["@babel/preset-env"]
})

// 注册路由
app.use('/', routers);

const env = process.argv.splice(2)

const feMap = {
    dev: '/public',
    prod: '/build'
}
// 所有的请求都回到index页面
app.get('/', function(req, res){
    res.sendFile(__dirname + feMap[env] + '/index.html')
});

const server = app.listen(8081, '0.0.0.0', function(){
	const host = server.address().address
    const port = server.address().port
    console.log("http://%s:%s", host, port)
})

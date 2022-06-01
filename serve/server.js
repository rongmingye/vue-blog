
import express from 'express'
import cors from 'cors'
import logger from'morgan'
import compression from'compression'
import routers from'./routers'

const app = express()

// 注册中间件
app.use(logger())
app.use(cors({
    credentials: true, 
    origin: "*" 
}))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(express.static(__dirname))

// babel
require("@babel/register")({
    presets: ["@babel/preset-env"]
})

// 注册路由
routers.init(app)

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

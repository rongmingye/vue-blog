
import app from './app'
import routers from './routers'

require("@babel/register")({
    presets: ["@babel/preset-env"]
})

routers(app)

let developState = "/public"; //开发时是"/public", 打包后用"/build"

// 所有的请求都回到index页面
app.get('/', function(req, res){
    res.sendFile(__dirname+developState+'/index.html');
});

let server = app.listen(8081, '0.0.0.0', function(){
	let host = server.address().address;
    let port = server.address().port;
    console.log("http://%s:%s", host, port);
})

let express = require('express');
let app = express();
let cors = require('cors');

let router = require('./serve/router.js');
let routerManage = require('./serve/routerManage.js');

app.use(cors({
    credentials: true, 
    origin: "http://localhost:8080" 
}));

app.use(express.static(__dirname));
router(app);
routerManage(app);

var server = app.listen(8081, '0.0.0.0', function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log("http://%s:%s", host, port);
})

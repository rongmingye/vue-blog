let env = {
    prod: {
        serveHost: "http://rongmingye.com:8010",
    },
    dev: {
        serveHost: "http://localhost:8010",
    }
}

// 选择环境主机
let hostConfig = env.prod

export default {
    serveHost: hostConfig.serveHost,
}

let env = {
    prod: {
        serveHost: "https://rongmingye.com",
    },
    dev: {
        serveHost: "http://localhost:8090",
    }
}

// 选择环境主机
let hostConfig = env.dev

export default {
    serveHost: hostConfig.serveHost,
}

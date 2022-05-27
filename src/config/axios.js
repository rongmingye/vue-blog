import axios from "axios";
import { Message } from "element-ui";

axios.defaults.withCredentials = false;

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.err_code) {
      switch (response.data.err_code) {
        case "1001":
          // 认证失败，请重新登录！
          break;
        case "1002":
          // 参数不合法！
          break;
      }
      // 返回接口的错误信息
      return response.data;
    } else {
      return response.data;
    }
  },
  (error) => {
    Message.warning("服务器发生错误!");

    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 错误
          break;
        case 500:
          // 500 错误
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axios;

import axios from "axios";
import store from "@/store";
import router from "@/router";

// 测试地址
// axios.defaults.baseURL = '';    
// 线上地址
// axios.defaults.baseURL = '';  
// demo地址
// axios.defaults.baseURL = '';  

// let _baseURL = process.env.BASE_API;

// function setBaseURL() {
//   const webHost = localStorage.getItem("webHost"); // 获取浏览器本地存储中Key为webHost那一项的值
//   if (process.env.NODE_ENV === "stg" && webHost) {
//     // 判断当前的环境以及是否存在webHost
//     _baseURL = webHost; // 将_baseURL重新赋值
//   }
//   return _baseURL;
// }

axios.defaults.baseURL = 'https://mmc-api.zz-med-test.com'

axios.defaults.timeout = 60000

// Request interceptor
axios.interceptors.request.use((request) => {
  let token = localStorage.getItem.get("token")
  if (token) {
    request.headers.common["Authorization"] = `Bearer ${token}`
  }

  if (request.headers === undefined) {
    request.headers["Content-Type"] = "application/json"
  }

  return request
});

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    if (response.headers.Authorization !== undefined) {
      store.dispatch("auth/saveToken", {
        token: response.headers.Authorization,
        express: response.headers.expires_in,
      })
    }

    if (
      response.data.status === 40006 ||
      response.data.status === 40004 ||
      response.data.status === 40005
    ) {
      store.dispatch("auth/removeData").then(() => {
        router.push({ name: "login" })
      })
    }
    return response.data
  },
  (error) => {
    if (error.response !== undefined) {
      const { status } = error.response
      if (status === 401 && store.getters["auth/check"]) {
        store.dispatch("auth/removeData").then(() => {
          router.push({ name: "login" })
        });
      } else if (status >= 500) {
        alert("服务器异常请重试")
      } else if (status >= 404) {
        alert("服务器异常请重试")
      }
    } else {
      alert("服务器异常请重试")
    }
    // console.log(error)
    return Promise.reject(error)
  }
);

export default axios


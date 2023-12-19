import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError
} from "axios";

// 創建一個 Axios 實例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api", // 替換為您的 API 基本 URL
  timeout: 10000 // 請求超時時間（毫秒）
});

// 請求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在請求發送前，可以在這裡設置請求標頭等
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

// 響應拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在響應成功時，可以在這裡對響應進行處理
    return response.data;
  },
  async (error: AxiosError) => {
    // 在響應出錯時，可以在這裡處理錯誤
    return await Promise.reject(error);
  }
);

// 封裝 GET 請求
export const get = async <T>(url: string, params?: object): Promise<T> => {
  return await axiosInstance.get(url, { params });
};

// 封裝 POST 請求
export const post = async <T>(url: string, data?: object): Promise<T> => {
  return await axiosInstance.post(url, data);
};

// 其他常用的請求封裝，如 PUT、DELETE，根據需要添加

export default axiosInstance;

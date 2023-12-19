import axios from "@/api/axios-instance"; // 導入之前封裝的 Axios 實例
import { type AxiosResponse } from "axios";

// 定義用戶相關的 API 接口

// 用戶註冊
export const registerUser = async (
  userData: Record<string, unknown>
): Promise<AxiosResponse> => {
  try {
    return await axios.post("/api/register-user", userData);
  } catch (error) {
    console.error(error);
    throw new Error("Error registering the user");
  }
};

// 用戶登錄
export const loginUser = async (
  loginData: Record<string, unknown>
): Promise<AxiosResponse> => {
  try {
    return await axios.post("/api/login-user", loginData);
  } catch (error) {
    console.error(error);
    throw new Error("Error logging in the user");
  }
};

// 獲取用戶個人資料
export const getUserProfile = async (): Promise<AxiosResponse> => {
  try {
    return await axios.get("/api/user-profile");
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user profile");
  }
};

// 編輯用戶個人資料
export const editUserProfile = async (
  userData: Record<string, unknown>
): Promise<AxiosResponse> => {
  try {
    return await axios.put("/api/edit-user-profile", userData);
  } catch (error) {
    console.error(error);
    throw new Error("Error editing user profile");
  }
};

// 其他用戶相關的 API 函數，根據需求添加

export default {
  registerUser,
  loginUser,
  getUserProfile,
  editUserProfile
};

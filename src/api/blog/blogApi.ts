import axios from "@/api/axios-instance"; // 導入之前封裝的 Axios 實例
import { type AxiosResponse } from "axios";

// 定義部落格相關的 API 接口

// 創建部落格
export const createBlog = async (
  blogData: Record<string, unknown>
): Promise<AxiosResponse> => {
  return await axios.post("/api/create-blog", blogData);
};

// 編輯部落格
export const editBlog = async (
  blogId: number,
  blogData: Record<string, unknown>
): Promise<AxiosResponse> => {
  return await axios.put(`/api/edit-blog/${blogId}`, blogData);
};

// 刪除部落格
export const deleteBlog = async (blogId: number): Promise<AxiosResponse> => {
  return await axios.delete(`/api/delete-blog/${blogId}`);
};

// 獲取部落格詳細信息
export const getBlogDetails = async (
  blogId: number
): Promise<AxiosResponse> => {
  return await axios.get(`/api/blog-details/${blogId}`);
};

// 文章點讚
export const likeArticle = async (
  articleId: number
): Promise<AxiosResponse> => {
  return await axios.post(`/api/like-article/${articleId}`);
};

// 文章取消點讚
export const unlikeArticle = async (
  articleId: number
): Promise<AxiosResponse> => {
  return await axios.delete(`/api/unlike-article/${articleId}`);
};

// 文章收藏
export const favoriteArticle = async (
  articleId: number
): Promise<AxiosResponse> => {
  return await axios.post(`/api/favorite-article/${articleId}`);
};

// 文章取消收藏
export const unfavoriteArticle = async (
  articleId: number
): Promise<AxiosResponse> => {
  return await axios.delete(`/api/unfavorite-article/${articleId}`);
};

// 其他部落格相關的 API 函數，根據需求添加

export default {
  createBlog,
  editBlog,
  deleteBlog,
  getBlogDetails,
  likeArticle,
  unlikeArticle,
  favoriteArticle,
  unfavoriteArticle
};

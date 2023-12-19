import axios from "@/api/axios-instance"; // 導入之前封裝的 Axios 實例
import { type AxiosResponse } from "axios";

// 定義評論相關的 API 接口

// 評論文章
export const commentArticle = async (
  articleId: number,
  commentData: Record<string, unknown>
): Promise<AxiosResponse> => {
  try {
    return await axios.post(`/api/comment-article/${articleId}`, commentData);
  } catch (error) {
    console.error(error);
    throw new Error("Error commenting on the article");
  }
};

// 刪除評論
export const deleteComment = async (
  commentId: number
): Promise<AxiosResponse> => {
  try {
    return await axios.delete(`/api/delete-comment/${commentId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting the comment");
  }
};

// 獲取文章評論列表
export const getCommentsForArticle = async (
  articleId: number
): Promise<AxiosResponse> => {
  try {
    return await axios.get(`/api/comments-for-article/${articleId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error getting comments for the article");
  }
};

// 評論點讚
export const likeComment = async (
  commentId: number
): Promise<AxiosResponse> => {
  try {
    return await axios.post(`/api/like-comment/${commentId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error liking the comment");
  }
};

// 評論取消點讚
export const unlikeComment = async (
  commentId: number
): Promise<AxiosResponse> => {
  try {
    return await axios.delete(`/api/unlike-comment/${commentId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error unliking the comment");
  }
};

// 其他評論相關的 API 函數，根據需求添加

export default {
  commentArticle,
  deleteComment,
  getCommentsForArticle,
  likeComment,
  unlikeComment
};

import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import { IResponse } from "../interface/response.interface";
import { IBlog } from "../interface/blog.interface";

interface BlogService {
  getAllBlog: (params?: { status?: string }) => Promise<IResponse<IBlog[]>>;
  getDetailBlog: (id: number) => Promise<IResponse<IBlog>>;
  addBlog: (formData: FormData) => Promise<IResponse>;
  updateBlog: (id: number, formData: FormData) => Promise<IResponse>;
  deleteBlog: (id: number) => Promise<IResponse>;
}

const BlogService = (): BlogService => {
  const navigate = useNavigate();
  const apiUrl = (import.meta as any).env.VITE_API_URL;
  const [cookieLogin] = useCookie("userLoginCookie");
  const userLoginCookie = cookieLogin ? JSON.parse(cookieLogin) : null;

  const handleUnauthorized = (status: number) => {
    if (status === 401) {
      navigate("/cmsadmin/login");
    }
  };

  const getAllBlog = async (params?: {
    status?: string;
  }): Promise<IResponse<IBlog[]>> => {
    try {
      const queryParams = new URLSearchParams();

      if (params?.status) {
        queryParams.append("status", params.status);
      }

      const response: AxiosResponse<IResponse<IBlog[]>> = await axios.get(
        `${apiUrl}/api/blog?${queryParams.toString()}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleUnauthorized(error.response?.status || 0);
      }
      console.error(error);
      throw error;
    }
  };

  const getDetailBlog = async (id: number): Promise<IResponse<IBlog>> => {
    try {
      const response: AxiosResponse<IResponse<IBlog>> = await axios.get(
        `${apiUrl}/api/blog/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const addBlog = async (formData: FormData): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.post(
        `${apiUrl}/api/blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userLoginCookie.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleUnauthorized(error.response?.status || 0);
      }
      throw error;
    }
  };
  const updateBlog = async (
    id: number,
    formData: FormData
  ): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.put(
        `${apiUrl}/api/blog/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userLoginCookie.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleUnauthorized(error.response?.status || 0);
      }
      throw error;
    }
  };

  const deleteBlog = async (id: number): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.delete(
        `${apiUrl}/api/blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userLoginCookie.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleUnauthorized(error.response?.status || 0);
      }
      throw error;
    }
  };

  return {
    getAllBlog,
    getDetailBlog,
    addBlog,
    updateBlog,
    deleteBlog,
  };
};

export default BlogService;

import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import { IPayloadTestimoni, ITestimoni } from "../interface/testimoni.interface";
import { IResponse } from "../interface/response.interface";

interface TestimoniService {
  getAllTestimoni: (params?: { status?: string }) => Promise<IResponse<ITestimoni[]>>;
  getDetailTestimoni: (id: number) => Promise<IResponse<ITestimoni>>;
  addTestimoni: (formData: IPayloadTestimoni) => Promise<IResponse>;
  updateTestimoni: (id: number, formData: IPayloadTestimoni) => Promise<IResponse>;
  deleteTestimoni: (id: number) => Promise<IResponse>;
}

const TestimoniService = (): TestimoniService => {
  const navigate = useNavigate();
  const apiUrl = (import.meta as any).env.VITE_API_URL;
  const [cookieLogin] = useCookie("userLoginCookie");
  const userLoginCookie = cookieLogin ? JSON.parse(cookieLogin) : null;

  const handleUnauthorized = (status: number) => {
    if (status === 401) {
      navigate("/cmsadmin/login");
    }
  };

  const getAllTestimoni = async (params?: {
    status?: string;
  }): Promise<IResponse<ITestimoni[]>> => {
    try {
      const queryParams = new URLSearchParams();

      if (params?.status) {
        queryParams.append("status", params.status);
      }

      const response: AxiosResponse<IResponse<ITestimoni[]>> = await axios.get(
        `${apiUrl}/api/testimoni?${queryParams.toString()}`
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

  const getDetailTestimoni = async (id: number): Promise<IResponse<ITestimoni>> => {
    try {
      const response: AxiosResponse<IResponse<ITestimoni>> = await axios.get(
        `${apiUrl}/api/testimoni/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const addTestimoni = async (formData: IPayloadTestimoni): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.post(
        `${apiUrl}/api/testimoni`,
        formData,
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
  const updateTestimoni = async (
    id: number,
    formData: IPayloadTestimoni
  ): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.put(
        `${apiUrl}/api/testimoni/${id}`,
        formData,
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

  const deleteTestimoni = async (id: number): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.delete(
        `${apiUrl}/api/testimoni/${id}`,
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
    getAllTestimoni,
    getDetailTestimoni,
    addTestimoni,
    updateTestimoni,
    deleteTestimoni,
  };
};

export default TestimoniService;

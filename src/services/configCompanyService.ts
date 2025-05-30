import {
  IConfigCompany,
  IPayloadConfigCompany,
} from "./../interface/configCompany.interface";
import { IResponse } from "./../interface/response.interface";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

interface ConfigCompanyService {
  getDetailConfigCompany: () => Promise<IResponse<IConfigCompany>>;
  updateConfigCompany: (
    id: number,
    data: IPayloadConfigCompany
  ) => Promise<IResponse>;
}

const ConfigCompanyService = (): ConfigCompanyService => {
  const navigate = useNavigate();
  const apiUrl = (import.meta as any).env.VITE_API_URL;
  const [cookieLogin] = useCookie("userLoginCookie");
  const userLoginCookie = cookieLogin ? JSON.parse(cookieLogin) : null;

  const handleUnauthorized = (status: number) => {
    if (status === 401) {
      navigate("/cmsadmin/login");
    }
  };

  const getDetailConfigCompany = async (): Promise<
    IResponse<IConfigCompany>
  > => {
    try {
      const response: AxiosResponse<IResponse<IConfigCompany>> =
        await axios.get(`${apiUrl}/api/company`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateConfigCompany = async (
    id: number,
    data: IPayloadConfigCompany
  ): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.put(
        `${apiUrl}/api/company/${id}`,
        data,
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
    getDetailConfigCompany,
    updateConfigCompany,
  };
};

export default ConfigCompanyService;

import { ITeam } from "./../interface/team.interface";
import { IResponse } from "./../interface/response.interface";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

interface TeamService {
  getAllTeam: (params?: { status?: string }) => Promise<IResponse<ITeam[]>>;
  getDetailTeam: (id: number) => Promise<IResponse<ITeam>>;
  addTeam: (formData: FormData) => Promise<IResponse>;
  updateTeam: (id: number, formData: FormData) => Promise<IResponse>;
  deleteTeam: (id: number) => Promise<IResponse>;
}

const TeamService = (): TeamService => {
  const navigate = useNavigate();
  const apiUrl = (import.meta as any).env.VITE_API_URL;
  const [cookieLogin] = useCookie("userLoginCookie");
  const userLoginCookie = cookieLogin ? JSON.parse(cookieLogin) : null;

  const handleUnauthorized = (status: number) => {
    if (status === 401) {
      navigate("/cmsadmin/login");
    }
  };

  const getAllTeam = async (params?: {
    status?: string;
    idkategori?: number;
    idsubkategori?: number;
  }): Promise<IResponse<ITeam[]>> => {
    try {
      const queryParams = new URLSearchParams();

      if (params?.status) {
        queryParams.append("status", params.status);
      }

      const response: AxiosResponse<IResponse<ITeam[]>> = await axios.get(
        `${apiUrl}/api/team?${queryParams.toString()}`
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

  const getDetailTeam = async (id: number): Promise<IResponse<ITeam>> => {
    try {
      const response: AxiosResponse<IResponse<ITeam>> = await axios.get(
        `${apiUrl}/api/team/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const addTeam = async (formData: FormData): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.post(
        `${apiUrl}/api/team`,
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
  const updateTeam = async (
    id: number,
    formData: FormData
  ): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.put(
        `${apiUrl}/api/team/${id}`,
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

  const deleteTeam = async (id: number): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.delete(
        `${apiUrl}/api/team/${id}`,
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
    getAllTeam,
    getDetailTeam,
    addTeam,
    updateTeam,
    deleteTeam,
  };
};

export default TeamService;

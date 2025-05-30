import { IProduk } from "./../interface/produk.interface";
import { IResponse } from "./../interface/response.interface";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

interface ProdukService {
  getAllProduk: (params?: {
    status?: string;
    idkategori?: number;
    idsubkategori?: number;
  }) => Promise<IResponse<IProduk[]>>;
  getDetailProduk: (id: number) => Promise<IResponse<IProduk>>;
  addProduk: (formData: FormData) => Promise<IResponse>;
  updateProduk: (id: number, formData: FormData) => Promise<IResponse>;
  deleteProduk: (id: number) => Promise<IResponse>;
}

const ProdukService = (): ProdukService => {
  const navigate = useNavigate();
  const apiUrl = (import.meta as any).env.VITE_API_URL;
  const [cookieLogin] = useCookie("userLoginCookie");
  const userLoginCookie = cookieLogin ? JSON.parse(cookieLogin) : null;

  const handleUnauthorized = (status: number) => {
    if (status === 401) {
      navigate("/cmsadmin/login");
    }
  };

  const getAllProduk = async (
    params?: {
      status?: string;
      idkategori?: number;
      idsubkategori?: number;
    }
  ): Promise<IResponse<IProduk[]>> => {
    try {
      // Build query parameters
      const queryParams = new URLSearchParams();
      
      if (params?.status) {
        queryParams.append('status', params.status);
      }
      
      if (params?.idkategori) {
        queryParams.append('idkategori', params.idkategori.toString());
      }
      
      if (params?.idsubkategori) {
        queryParams.append('idsubkategori', params.idsubkategori.toString());
      }

      const response: AxiosResponse<IResponse<IProduk[]>> = await axios.get(
        `${apiUrl}/api/produk?${queryParams.toString()}`
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

  const getDetailProduk = async (id: number): Promise<IResponse<IProduk>> => {
    try {
      const response: AxiosResponse<IResponse<IProduk>> = await axios.get(
        `${apiUrl}/api/produk/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const addProduk = async (formData: FormData): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.post(
        `${apiUrl}/api/produk`,
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
  const updateProduk = async (
    id: number,
    formData: FormData
  ): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.put(
        `${apiUrl}/api/produk/${id}`,
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

  const deleteProduk = async (id: number): Promise<IResponse> => {
    try {
      const response: AxiosResponse<IResponse> = await axios.delete(
        `${apiUrl}/api/produk/${id}`,
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
    getAllProduk,
    getDetailProduk,
    addProduk,
    updateProduk,
    deleteProduk,
  };
};

export default ProdukService;

import { IMedia } from "./media.interface";

export interface IBlog {
  id: number;
  uuid: string;
  name: string;
  description: string;
  categori: string;
  prioritas: number;
  status: number;
  created_at: string;
  updated_at: string;
  images: IMedia[];
}

export interface IPayloadBlog {
  id?: number | null;
  uuid?: string;
  name: string;
  description: string;
  categori: string;
  prioritas: number;
  status: number;
}

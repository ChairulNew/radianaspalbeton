import { IMedia } from "./media.interface";

export interface ITeam {
  id: number;
  uuid: string;
  name: string;
  description: string;
  prioritas: number;
  status: number;
  created_at: string;
  updated_at: string;
  images: IMedia[];
}

export interface IPayloadTeam {
  id?: number | null;
  uuid?: string;
  name: string;
  description: string;
  prioritas: number;
  status: number;
}

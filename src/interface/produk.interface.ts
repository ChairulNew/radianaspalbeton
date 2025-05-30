import { IMedia } from "./media.interface";

export interface IProduk {
  id: number;
  uuid: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  shopee_link: string;
  tokped_link: string;
  kategori_id: number | null;
  subkategori_id?: number | null;
  prioritas: number;
  status: number;
  created_at: string;
  updated_at: string;
  // subkategori: ISubKategoriProduk;
  // kategori: IKategoriProduk;
  images: IMedia[];
}

export interface IPayloadProduk {
  id?: number | null;
  uuid?: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  shopee_link: string;
  tokped_link: string;
  kategori_id: string;
  subkategori_id: string;
  prioritas: number;
  status: number;
}

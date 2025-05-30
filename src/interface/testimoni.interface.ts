export interface ITestimoni {
  id: number;
  uuid: string;
  name: string;
  description: string;
  prioritas: number;
  status: number;
  rating: string;
  created_at: string;
  updated_at: string;
}

export interface IPayloadTestimoni {
  id?: number | null;
  uuid?: string;
  name: string;
  description: string;
  prioritas: number;
  status: number;
  rating: string;
}

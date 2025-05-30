export interface IResponse<T = unknown> {
  message: string;
  status: number;
  success: boolean;
  data?: T;
}

export interface IBaseModel<T> {
  status: number;
  message: string;
  data: T;
}

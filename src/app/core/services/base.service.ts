import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseModel } from '@models/base.model';

export abstract class BaseService<T> {
  protected constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) {}

  fetchAll(params?: HttpParams): Observable<IBaseModel<T>> {
    return this.http.get<IBaseModel<T>>(this.baseUrl, { params });
  }

  fetchById(id: string | number): Observable<IBaseModel<T>> {
    return this.http.get<IBaseModel<T>>(`${this.baseUrl}/${id}`);
  }

  create(data: Partial<T>): Observable<IBaseModel<T>> {
    return this.http.post<IBaseModel<T>>(this.baseUrl, data);
  }

  update(id: string | number, data: Partial<T>): Observable<IBaseModel<T>> {
    return this.http.put<IBaseModel<T>>(`${this.baseUrl}/${id}`, data);
  }

  patch(id: string | number, data: Partial<T>): Observable<IBaseModel<T>> {
    return this.http.patch<IBaseModel<T>>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<IBaseModel<T>> {
    return this.http.delete<IBaseModel<T>>(`${this.baseUrl}/${id}`);
  }
}

import { inject } from '@angular/core';
import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
import { CacheService } from './cache.service';
import { IBaseModel } from '@models/base.model';

export abstract class BaseCacheService<T> {
  protected abstract CACHE_KEY: string;
  protected cacheService = inject(CacheService<T>);

  protected constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) {}

  fetchAll(params?: HttpParams): Observable<T[]> {
    const cachedData = this.cacheService.get(this.CACHE_KEY);
    if (cachedData) {
      return of(cachedData);
    }
    return this.http.get<IBaseModel<T[]>>(this.baseUrl, { params }).pipe(
      map((res) => {
        let data: T[] = [];
        if (res.status === HttpStatusCode.Ok) {
          data = res.data;
        }
        this.cacheService.set(this.CACHE_KEY, data);
        return data;
      })
    );
  }

  fetchById(id: string | number): Observable<T | null> {
    const cachedData = this.cacheService.get(this.CACHE_KEY + id);
    if (cachedData) {
      return of(cachedData);
    }
    return this.http.get<IBaseModel<T>>(`${this.baseUrl}/${id}`).pipe(
      map((res) => {
        let data: T | null = null;
        if (res.status === HttpStatusCode.Ok) {
          data = res.data;
        }
        this.cacheService.set(this.CACHE_KEY + id, data);
        return data;
      })
    );
  }

  create(data: Partial<T>): Observable<IBaseModel<T>> {
    const cachedData = this.cacheService.get(this.CACHE_KEY);
    if (cachedData) {
      this.cacheService.clear(this.CACHE_KEY);
    }
    return this.http.post<IBaseModel<T>>(this.baseUrl, data);
  }

  update(id: string | number, data: Partial<T>): Observable<IBaseModel<T>> {
    const cachedDataById = this.cacheService.get(this.CACHE_KEY + id);
    if (cachedDataById) {
      this.cacheService.clear(this.CACHE_KEY + id);
    }
    const cachedData = this.cacheService.get(this.CACHE_KEY);
    if (cachedData) {
      this.cacheService.clear(this.CACHE_KEY);
    }
    return this.http.put<IBaseModel<T>>(`${this.baseUrl}/${id}`, data);
  }

  patch(id: string | number, data: Partial<T>): Observable<IBaseModel<T>> {
    const cachedDataById = this.cacheService.get(this.CACHE_KEY + id);
    if (cachedDataById) {
      this.cacheService.clear(this.CACHE_KEY + id);
    }
    const cachedData = this.cacheService.get(this.CACHE_KEY);
    if (cachedData) {
      this.cacheService.clear(this.CACHE_KEY);
    }
    return this.http.patch<IBaseModel<T>>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<IBaseModel<T>> {
    const cachedDataById = this.cacheService.get(this.CACHE_KEY + id);
    if (cachedDataById) {
      this.cacheService.clear(this.CACHE_KEY + id);
    }
    const cachedData = this.cacheService.get(this.CACHE_KEY);
    if (cachedData) {
      this.cacheService.clear(this.CACHE_KEY);
    }
    return this.http.delete<IBaseModel<T>>(`${this.baseUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { BaseCacheService } from '@core/services/base-cache.service';
import { Injectable } from '@angular/core';
import { IProduct } from '@models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseCacheService<IProduct> {
  protected override readonly CACHE_KEY = 'PRODUCT';

  constructor(http: HttpClient) {
    super(http, 'assets/database/product.json');
  }
}

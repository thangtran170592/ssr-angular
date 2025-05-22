import { HttpClient } from '@angular/common/http';
import { BaseCacheService } from '@core/services/base-cache.service';
import { MegaMenuItem } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends BaseCacheService<MegaMenuItem> {
  protected override readonly CACHE_KEY = 'MENU';
  constructor(http: HttpClient) {
    super(http, 'assets/database/menu.json');
  }
}

import { HttpClient } from '@angular/common/http';
import { BaseCacheService } from '@core/services/base-cache.service';
import { Injectable } from '@angular/core';
import { ISlider } from '@models/slider.model';

@Injectable({
  providedIn: 'root',
})
export class SlideService extends BaseCacheService<ISlider> {
  protected override readonly CACHE_KEY = 'SLIDES';

  constructor(http: HttpClient) {
    super(http, 'assets/database/slide.json');
  }
}

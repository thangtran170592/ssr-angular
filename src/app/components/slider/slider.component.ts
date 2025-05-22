import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ISlider } from '@models/slider.model';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { PlatformService } from '@core/services/platform.service';
import { SlideService } from '@app/services/slide.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule, TagModule, RouterModule],
})
export class SliderComponent implements OnInit {
  sliders = signal<ISlider[]>([]);
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1200px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private platformService: PlatformService,
    private slideService: SlideService
  ) {}

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      this.slideService.fetchAll().subscribe((res) => {
        this.sliders.set(res);
      });
    }
  }
}

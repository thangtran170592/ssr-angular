import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISlider } from '@models/slider.model';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { PlatformService } from '@core/services/platform.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule, TagModule],
})
export class SliderComponent implements OnInit {
  sliders: ISlider[] = [];
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

  constructor(private platformService: PlatformService) {}

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      this.sliders = [
        {
          id: 1,
          title: 'Slider 1',
          description: 'Description 1',
          image: 'assets/images/slider-1.jpg',
        },
        {
          id: 2,
          title: 'Slider 2',
          description: 'Description 2',
          image: 'assets/images/slider-2.jpg',
        },
        {
          id: 3,
          title: 'Slider 3',
          description: 'Description 3',
          image: 'assets/images/slider-3.jpg',
        },
      ];
    }
  }
}

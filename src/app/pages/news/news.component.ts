import { Component, signal, ViewEncapsulation } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent {
  items = signal<IBreadcumbItem[]>([
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Tin tức', url: '/tin-tuc' },
  ]);
}

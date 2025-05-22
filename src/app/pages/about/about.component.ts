import { Component, signal, ViewEncapsulation } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {
  items = signal<IBreadcumbItem[]>([
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Giới thiệu', url: '/gioi-thieu' },
  ]);
}

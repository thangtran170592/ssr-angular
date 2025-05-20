import { Component, ViewEncapsulation } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class TrainingComponent {
  items: IBreadcumbItem[] = [
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Đào tạo', url: '/dao-tao' },
  ];
}

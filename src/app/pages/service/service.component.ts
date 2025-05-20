import { Component, ViewEncapsulation } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class ServiceComponent {
  items: IBreadcumbItem[] = [
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Dịch vụ', url: '/dich-vu' },
  ];
}

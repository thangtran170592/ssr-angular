import { Component, ViewEncapsulation } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';
@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class ConsultingComponent {
  items: IBreadcumbItem[] = [
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Tư vấn thiết kế', url: '/tu-van-thiet-ke' },
  ];
}

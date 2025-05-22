import { Component, signal } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone: false,
})
export class ProjectComponent {
  items = signal<IBreadcumbItem[]>([
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Dự án', url: '/du-an' },
  ]);
}

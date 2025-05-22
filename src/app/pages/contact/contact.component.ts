import { Component, signal, ViewEncapsulation } from '@angular/core';
import { IBreadcumbItem } from '@models/breadcumb.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  items = signal<IBreadcumbItem[]>([
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Liên hệ', url: '/lien-he' },
  ]);
}

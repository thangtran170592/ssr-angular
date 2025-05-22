import { Component, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { IBreadcumbItem } from '@models/breadcumb.model';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss',
  imports: [CommonModule, BreadcrumbModule, RouterModule],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class BreadcumbComponent {
  items = input.required<IBreadcumbItem[]>();
}

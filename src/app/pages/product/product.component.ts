import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '@app/services/product.service';
import { IBreadcumbItem } from '@models/breadcumb.model';
import { IProduct } from '@models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: false,
})
export class ProductComponent implements OnInit {
  items = signal<IBreadcumbItem[]>([
    { label: 'Trang chủ', url: '/trang-chu', icon: 'pi pi-home' },
    { label: 'Sản phẩm', url: '/san-pham' },
  ]);
  products = signal<IProduct[]>([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .fetchAll()
      .subscribe((products) => this.products.set(products));
  }
}

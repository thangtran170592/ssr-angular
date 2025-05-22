import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '@models/product.model';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TruncateDirective } from '@core/directives/truncate.directive';
@Component({
  selector: 'app-product-card',
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    FormsModule,
    TruncateDirective,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true,
})
export class ProductCardComponent {
  product = input.required<IProduct>();
  className = input<string>('');
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductComponent } from './product.component';
import { ProductCardComponent } from '@components/product-card/product-card.component';
@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, ProductCardComponent],
  exports: [ProductComponent],
})
export class ProductModule {}

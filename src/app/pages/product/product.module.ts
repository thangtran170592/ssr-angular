import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from '@pages/product/product.routing';
import { ProductComponent } from '@pages/product/product.component';
import { ProductCardComponent } from '@components/product-card/product-card.component';
@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, ProductCardComponent],
  exports: [ProductComponent],
})
export class ProductModule {}

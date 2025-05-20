import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PanelModule],
  exports: [HomeComponent],
})
export class HomeModule {}

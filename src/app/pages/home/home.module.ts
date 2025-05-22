import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@pages/home/home.component';
import { HomeRoutingModule } from '@pages/home/home.routing';
import { PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PanelModule],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '@pages/about/about.component';
import { AboutRoutingModule } from '@pages/about/about.routing';
import { PanelModule } from 'primeng/panel';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, PanelModule, BreadcumbComponent],
})
export class AboutModule {}

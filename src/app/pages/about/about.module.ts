import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { PanelModule } from 'primeng/panel';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, PanelModule, BreadcumbComponent],
  exports: [AboutComponent],
})
export class AboutModule {}

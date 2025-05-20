import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from './service.routing';
import { ServiceComponent } from './service.component';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
import { PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    BreadcumbComponent,
    PanelModule,
  ],
  exports: [ServiceComponent],
})
export class ServiceModule {}

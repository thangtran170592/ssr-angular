import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from '@pages/service/service.routing';
import { ServiceComponent } from '@pages/service/service.component';
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
})
export class ServiceModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultingRoutingModule } from '@pages/consulting/consulting.routing';
import { PanelModule } from 'primeng/panel';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
import { ConsultingComponent } from '@pages/consulting/consulting.component';
@NgModule({
  declarations: [ConsultingComponent],
  imports: [
    CommonModule,
    ConsultingRoutingModule,
    PanelModule,
    BreadcumbComponent,
  ],
  exports: [ConsultingComponent],
})
export class ConsultingModule {}

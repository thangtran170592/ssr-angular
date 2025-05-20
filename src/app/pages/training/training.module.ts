import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training.routing';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
import { PanelModule } from 'primeng/panel';
import { TrainingComponent } from './training.component';
@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    BreadcumbComponent,
    PanelModule,
  ],
  exports: [TrainingComponent],
})
export class TrainingModule {}

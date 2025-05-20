import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project.routing';
import { ProjectComponent } from './project.component';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { Content1Component } from './content-1/content-1.component';
import { Content2Component } from './content-2/content-2.component';
import { Content3Component } from './content-3/content-3.component';
import { Content4Component } from './content-4/content-4.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    ProjectComponent,
    Content1Component,
    Content2Component,
    Content3Component,
    Content4Component,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ProductCardComponent,
    BreadcumbComponent,
    StepperModule,
    ButtonModule,
    AccordionModule,
    CardModule,
  ],
  exports: [ProjectComponent],
})
export class ProjectModule {}

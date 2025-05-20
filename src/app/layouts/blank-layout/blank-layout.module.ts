import { NgModule } from '@angular/core';
import { BlankLayoutRoutingModule } from '@layouts/blank-layout/blank-layout.routing';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent, BreadcumbComponent } from '@components/index';
import { BlankLayoutComponent } from './blank-layout.component';

@NgModule({
  declarations: [BlankLayoutComponent],
  imports: [
    HeaderComponent,
    FooterComponent,
    BreadcumbComponent,
    BlankLayoutRoutingModule,
  ],
})
export class BlankLayoutModule {}

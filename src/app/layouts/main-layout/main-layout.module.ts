import { NgModule } from '@angular/core';
import { MainLayoutRoutingModule } from './main-layout.routing';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from '../../components/header/header.component';
import {
  FooterComponent,
  SliderComponent,
  BreadcumbComponent,
} from '@components/index';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    BreadcumbComponent,
    MainLayoutRoutingModule,
  ],
})
export class MainLayoutModule {}

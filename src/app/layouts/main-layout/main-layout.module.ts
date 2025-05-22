import { NgModule } from '@angular/core';
import { MainLayoutRoutingModule } from '@layouts/main-layout/main-layout.routing';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent, SliderComponent } from '@components/index';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    MainLayoutRoutingModule,
  ],
})
export class MainLayoutModule {}

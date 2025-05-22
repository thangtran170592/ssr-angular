import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '@pages/contact/contact.component';
import { ContactRoutingModule } from '@pages/contact/contact.routing';
import { PanelModule } from 'primeng/panel';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    PanelModule,
    BreadcumbComponent,
  ],
})
export class ContactModule {}

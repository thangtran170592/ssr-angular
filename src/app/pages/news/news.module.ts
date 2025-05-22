import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from '@pages/news/news.component';
import { NewsRoutingModule } from '@pages/news/news.routing';
import { PanelModule } from 'primeng/panel';
import { BreadcumbComponent } from '@components/breadcumb/breadcumb.component';
@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, PanelModule, BreadcumbComponent, NewsRoutingModule],
})
export class NewsModule {}

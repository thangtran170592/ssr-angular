import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    title: 'Trang Chủ',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        title: 'Trang Chủ',
        loadChildren: () =>
          import('@pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}

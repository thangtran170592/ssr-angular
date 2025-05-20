import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from '@layouts/blank-layout/blank-layout.component';
const routes: Routes = [
  {
    path: '',
    title: 'Trang Chủ',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'gioi-thieu',
        title: 'Giới Thiệu',
        loadChildren: () =>
          import('@pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'san-pham',
        title: 'Sản Phẩm',
        loadChildren: () =>
          import('@pages/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'dich-vu',
        title: 'Dịch Vụ',
        loadChildren: () =>
          import('@pages/service/service.module').then((m) => m.ServiceModule),
      },
      {
        path: 'lien-he',
        title: 'Liên Hệ',
        loadChildren: () =>
          import('@pages/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'tu-van-thiet-ke',
        title: 'Tư Vấn Thiết Kế',
        loadChildren: () =>
          import('@pages/consulting/consulting.module').then(
            (m) => m.ConsultingModule
          ),
      },
      {
        path: 'dao-tao',
        title: 'Đào Tạo',
        loadChildren: () =>
          import('@pages/training/training.module').then(
            (m) => m.TrainingModule
          ),
      },
      {
        path: 'du-an',
        title: 'Dự Án',
        loadChildren: () =>
          import('@pages/project/project.module').then((m) => m.ProjectModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankLayoutRoutingModule {}

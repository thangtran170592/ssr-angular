import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tong-quan',
    title: 'Tổng Quan',
    loadChildren: () =>
      import('@layouts/landing-layout/landing-layout.module').then(
        (m) => m.LandingLayoutModule
      ),
  },
  {
    path: '',
    title: 'Trang Chủ',
    loadChildren: () =>
      import('@layouts/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
  },
  // {
  //   path: '',
  //   title: 'Trang Chủ',
  //   loadChildren: () =>
  //     import('@layouts/blank-layout/blank-layout.module').then(
  //       (m) => m.BlankLayoutModule
  //     ),
  // },
  { path: '**', redirectTo: 'tong-quan' },
];

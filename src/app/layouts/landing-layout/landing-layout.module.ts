import { NgModule } from '@angular/core';
import { LandingLayoutComponent } from './landing-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
  },
];

@NgModule({
  declarations: [LandingLayoutComponent],
  imports: [ButtonModule, AvatarModule, RouterModule.forChild(routes)],
  exports: [LandingLayoutComponent, RouterModule],
})
export class LandingLayoutModule {}

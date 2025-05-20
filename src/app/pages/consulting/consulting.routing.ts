import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingComponent } from '@pages/consulting/consulting.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultingRoutingModule {}

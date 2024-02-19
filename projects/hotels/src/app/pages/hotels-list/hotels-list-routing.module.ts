import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsListComponent } from './hotels-list.component';

const routes: Routes = [
  {path:'',component: HotelsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsListRoutingModule { }

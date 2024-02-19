import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path":"pages/cars-list",
     loadChildren:()=>import('./pages/cars-list/cars-list.module').then(mod=>mod.CarsListModule),
  },
  {"path":"",redirectTo:"pages/cars-list",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

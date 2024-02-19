import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path":"pages/hotels-list",
     loadChildren:()=>import('./pages/hotels-list/hotels-list.module').then(mod=>mod.HotelsListModule),
  },
  {"path":"",redirectTo:"pages/hotels-list",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path":"pages/flights-list",
     loadChildren:()=>import('./pages/flights-list/flights-list.module').then(mod=>mod.FlightsListModule),
  },
  {"path":"",redirectTo:"pages/flights-list",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

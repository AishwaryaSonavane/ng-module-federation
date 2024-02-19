import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsListRoutingModule } from './flights-list-routing.module';
import { FlightsListComponent } from './flights-list.component';


@NgModule({
  declarations: [
    FlightsListComponent
  ],
  imports: [
    CommonModule,
    FlightsListRoutingModule
  ]
})
export class FlightsListModule { }

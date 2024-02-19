import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsListRoutingModule } from './hotels-list-routing.module';
import { HotelsListComponent } from './hotels-list.component';


@NgModule({
  declarations: [
    HotelsListComponent
  ],
  imports: [
    CommonModule,
    HotelsListRoutingModule
  ]
})
export class HotelsListModule { }

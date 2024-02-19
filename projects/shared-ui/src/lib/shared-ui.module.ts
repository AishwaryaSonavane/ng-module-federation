import { NgModule } from '@angular/core';
import { NavigationModule } from './components/navigation/navigation.module';
import { SharedUiComponent } from './shared-ui.component';



@NgModule({
  declarations: [
    SharedUiComponent
  ],
  imports: [
    NavigationModule
  ],
  exports: [
    SharedUiComponent, NavigationModule
  ]
})
export class SharedUiModule { }

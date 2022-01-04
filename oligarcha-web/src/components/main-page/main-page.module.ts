import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MenuComponent } from '../menu/menu.component';
import { YachtSelectionComponent } from '../jachty/yacht-selection/yacht-selection.component';
import { JachtyModule } from '../jachty/jachty.module';



@NgModule({
  declarations: [
    MainPageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    JachtyModule
  ],
  exports :
  [
    MainPageComponent
  ]
})
export class MainPageModule { }

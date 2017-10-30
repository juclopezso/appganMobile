import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FincaPage } from './finca';

@NgModule({
  declarations: [
    FincaPage,
  ],
  imports: [
    IonicPageModule.forChild(FincaPage),
  ],
})
export class FincaPageModule {}

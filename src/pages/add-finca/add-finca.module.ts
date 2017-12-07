import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFincaPage } from './add-finca';

@NgModule({
  declarations: [
    AddFincaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFincaPage),
  ],
})
export class AddFincaPageModule {}

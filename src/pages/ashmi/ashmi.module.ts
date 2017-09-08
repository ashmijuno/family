import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AshmiPage } from './ashmi';

@NgModule({
  declarations: [
    AshmiPage,
  ],
  imports: [
    IonicPageModule.forChild(AshmiPage),
  ],
  exports: [
    AshmiPage
  ]
})
export class AshmiPageModule {}

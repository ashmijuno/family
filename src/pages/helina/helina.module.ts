import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelinaPage } from './helina';

@NgModule({
  declarations: [
    HelinaPage,
  ],
  imports: [
    IonicPageModule.forChild(HelinaPage),
  ],
  exports: [
    HelinaPage
  ]
})
export class HelinaPageModule {}

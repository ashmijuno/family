import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArokiaAlinHinoPage } from './arokia-alin-hino';

@NgModule({
  declarations: [
    ArokiaAlinHinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ArokiaAlinHinoPage),
  ],
  exports: [
    ArokiaAlinHinoPage
  ]
})
export class ArokiaAlinHinoPageModule {}

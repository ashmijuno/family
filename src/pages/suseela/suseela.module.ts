import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuseelaPage } from './suseela';

@NgModule({
  declarations: [
    SuseelaPage,
  ],
  imports: [
    IonicPageModule.forChild(SuseelaPage),
  ],
  exports: [
    SuseelaPage
  ]
})
export class SuseelaPageModule {}

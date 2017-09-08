import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SahayaShyjiAntoPage } from './sahaya-shyji-anto';

@NgModule({
  declarations: [
    SahayaShyjiAntoPage,
  ],
  imports: [
    IonicPageModule.forChild(SahayaShyjiAntoPage),
  ],
  exports: [
    SahayaShyjiAntoPage
  ]
})
export class SahayaShyjiAntoPageModule {}

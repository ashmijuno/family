import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SahayaRexPage } from './sahaya-rex';

@NgModule({
  declarations: [
    SahayaRexPage,
  ],
  imports: [
    IonicPageModule.forChild(SahayaRexPage),
  ],
  exports: [
    SahayaRexPage
  ]
})
export class SahayaRexPageModule {}

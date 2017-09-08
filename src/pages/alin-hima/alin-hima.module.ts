import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlinHimaPage } from './alin-hima';

@NgModule({
  declarations: [
    AlinHimaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlinHimaPage),
  ],
  exports: [
    AlinHimaPage
  ]
})
export class AlinHimaPageModule {}

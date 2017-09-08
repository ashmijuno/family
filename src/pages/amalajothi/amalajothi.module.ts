import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmalajothiPage } from './amalajothi';

@NgModule({
  declarations: [
    AmalajothiPage,
  ],
  imports: [
    IonicPageModule.forChild(AmalajothiPage),
  ],
  exports: [
    AmalajothiPage
  ]
})
export class AmalajothiPageModule {}

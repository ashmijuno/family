import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmiShejalPage } from './ami-shejal';

@NgModule({
  declarations: [
    AmiShejalPage,
  ],
  imports: [
    IonicPageModule.forChild(AmiShejalPage),
  ],
  exports: [
    AmiShejalPage
  ]
})
export class AmiShejalPageModule {}

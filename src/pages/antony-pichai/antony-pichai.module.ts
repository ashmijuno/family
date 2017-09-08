import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntonyPichaiPage } from './antony-pichai';

@NgModule({
  declarations: [
    AntonyPichaiPage,
  ],
  imports: [
    IonicPageModule.forChild(AntonyPichaiPage),
  ],
  exports: [
    AntonyPichaiPage
  ]
})
export class AntonyPichaiPageModule {}

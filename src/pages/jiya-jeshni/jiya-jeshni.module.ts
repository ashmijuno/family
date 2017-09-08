import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JiyaJeshniPage } from './jiya-jeshni';

@NgModule({
  declarations: [
    JiyaJeshniPage,
  ],
  imports: [
    IonicPageModule.forChild(JiyaJeshniPage),
  ],
  exports: [
    JiyaJeshniPage
  ]
})
export class JiyaJeshniPageModule {}

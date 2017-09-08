import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RajeshmaryPage } from './rajeshmary';

@NgModule({
  declarations: [
    RajeshmaryPage,
  ],
  imports: [
    IonicPageModule.forChild(RajeshmaryPage),
  ],
  exports: [
    RajeshmaryPage
  ]
})
export class RajeshmaryPageModule {}

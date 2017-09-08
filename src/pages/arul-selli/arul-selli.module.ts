import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArulSelliPage } from './arul-selli';

@NgModule({
  declarations: [
    ArulSelliPage,
  ],
  imports: [
    IonicPageModule.forChild(ArulSelliPage),
  ],
  exports: [
    ArulSelliPage
  ]
})
export class ArulSelliPageModule {}

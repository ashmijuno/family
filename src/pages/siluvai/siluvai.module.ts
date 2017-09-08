import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiluvaiPage } from './siluvai';

@NgModule({
  declarations: [
    SiluvaiPage,
  ],
  imports: [
    IonicPageModule.forChild(SiluvaiPage),
  ],
  exports: [
    SiluvaiPage
  ]
})
export class SiluvaiPageModule {}

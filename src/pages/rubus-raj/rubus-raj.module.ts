import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RubusRajPage } from './rubus-raj';

@NgModule({
  declarations: [
    RubusRajPage,
  ],
  imports: [
    IonicPageModule.forChild(RubusRajPage),
  ],
  exports: [
    RubusRajPage
  ]
})
export class RubusRajPageModule {}

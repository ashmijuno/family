import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfrinRijoPage } from './afrin-rijo';

@NgModule({
  declarations: [
    AfrinRijoPage,
  ],
  imports: [
    IonicPageModule.forChild(AfrinRijoPage),
  ],
  exports: [
    AfrinRijoPage
  ]
})
export class AfrinRijoPageModule {}

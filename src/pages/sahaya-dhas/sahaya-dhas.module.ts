import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SahayaDhasPage } from './sahaya-dhas';

@NgModule({
  declarations: [
    SahayaDhasPage,
  ],
  imports: [
    IonicPageModule.forChild(SahayaDhasPage),
  ],
  exports: [
    SahayaDhasPage
  ]
})
export class SahayaDhasPageModule {}

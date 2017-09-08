import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatrosePage } from './patrose';

@NgModule({
  declarations: [
    PatrosePage,
  ],
  imports: [
    IonicPageModule.forChild(PatrosePage),
  ],
  exports: [
    PatrosePage
  ]
})
export class PatrosePageModule {}

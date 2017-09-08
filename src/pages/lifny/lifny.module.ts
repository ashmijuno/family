import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifnyPage } from './lifny';

@NgModule({
  declarations: [
    LifnyPage,
  ],
  imports: [
    IonicPageModule.forChild(LifnyPage),
  ],
  exports: [
    LifnyPage
  ]
})
export class LifnyPageModule {}

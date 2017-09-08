import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AshmiJunoRexiPage } from './ashmi-juno-rexi';

@NgModule({
  declarations: [
    AshmiJunoRexiPage,
  ],
  imports: [
    IonicPageModule.forChild(AshmiJunoRexiPage),
  ],
  exports: [
    AshmiJunoRexiPage
  ]
})
export class AshmiJunoRexiPageModule {}

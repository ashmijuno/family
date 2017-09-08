import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlosiusBenzigarPage } from './alosius-benzigar';

@NgModule({
  declarations: [
    AlosiusBenzigarPage,
  ],
  imports: [
    IonicPageModule.forChild(AlosiusBenzigarPage),
  ],
  exports: [
    AlosiusBenzigarPage
  ]
})
export class AlosiusBenzigarPageModule {}

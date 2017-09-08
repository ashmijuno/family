import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JesuDhasPage } from './jesu-dhas';

@NgModule({
  declarations: [
    JesuDhasPage,
  ],
  imports: [
    IonicPageModule.forChild(JesuDhasPage),
  ],
  exports: [
    JesuDhasPage
  ]
})
export class JesuDhasPageModule {}

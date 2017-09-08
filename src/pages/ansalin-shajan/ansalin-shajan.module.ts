import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnsalinShajanPage } from './ansalin-shajan';

@NgModule({
  declarations: [
    AnsalinShajanPage,
  ],
  imports: [
    IonicPageModule.forChild(AnsalinShajanPage),
  ],
  exports: [
    AnsalinShajanPage
  ]
})
export class AnsalinShajanPageModule {}

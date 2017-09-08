import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FamilyMembersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-family-members',
  templateUrl: 'family-members.html',
})
export class FamilyMembersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  siluvai() {
    this.navCtrl.push('SiluvaiPage');
  }
  patrose() {
  this.navCtrl.push('PatrosePage');
  }
  AlosiusBenzigar() {
  this.navCtrl.push('AlosiusBenzigarPage');
  }
  Rajeshmary() {
  this.navCtrl.push('RajeshmaryPage');
  }
  SahayaDhas() {
  this.navCtrl.push('SahayaDhasPage');
  }
  ArulSelli() {
  this.navCtrl.push('ArulSelliPage');
  }
  AntonyPichai() {
  this.navCtrl.push('AntonyPichaiPage');
  }
  Suseela() {
  this.navCtrl.push('SuseelaPage');
  }
  RubusRaj(){
  this.navCtrl.push('RubusRajPage');
  }
  Amalajothi() {
  this.navCtrl.push('AmalajothiPage');
  }
  JesuDhas() {
  this.navCtrl.push('JesuDhasPage');
  }
  SahayaShyjiAnto() {
  this.navCtrl.push('SahayaShyjiAntoPage');
  }
  SahayaRex(){
  this.navCtrl.push('SahayaRexPage');
  }
  AshmiJunoRexi(){
  this.navCtrl.push('AshmiJunoRexiPage');
  }
  AnsalinShajan(){
  this.navCtrl.push('AnsalinShajanPage');
  }
  RashmiDeenaKoshika(){
  this.navCtrl.push('RashmiDeenaKoshikaPage');
  }
  Helina(){
  this.navCtrl.push('HelinaPage');
  }
  AlinHima(){
  this.navCtrl.push('AlinHimaPage');
  }
  Lifny(){
  this.navCtrl.push('LifnyPage');
  }
  ArokiaAlinHino(){
  this.navCtrl.push('ArokiaAlinHinoPage');
  }
  AmiShejal(){
  this.navCtrl.push('AmiShejalPage');
  }
  AfrinRijo(){
  this.navCtrl.push('AfrinRijoPage');
  }
  JiyaJeshni(){
  this.navCtrl.push('JiyaJeshniPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyMembersPage');
  }

}

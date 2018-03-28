import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast( position: string){
    this.toastCtrl.create({
      message : 'Dados salvos com sucesso',
      duration : 2000,
      position : position
    }).present();
  }

  showLongToast( position: string){
    this.toastCtrl.create({
      message : "Lorem ipsum proin dui eleifend etiam diam erat, quisitant praesent b",
      duration : 2000,
      position : 'top'
    }).present();
  }

  showToastWithCloseButton(){
    this.toastCtrl.create({
      message : "Operação feita com sucesso",
      showCloseButton: true,
      closeButtonText : 'OK',
      position: 'middle'
    }).present();
  }

}

import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public LoadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let aguarding = this.LoadingCtrl.create({
      content : "Por favor aguarde...",
      duration: 1000
    });
    aguarding.present(); 
  }

  salvar(){
    let aguarding = this.LoadingCtrl.create({
      content : "Salvando Dados..."
    });
    aguarding.present();

    setTimeout(()=>{
      aguarding.dismiss();
    }, 4000);
  }

  salvarCustomizado(){
    let aguardeCustomizado = this.LoadingCtrl.create({
      spinner : 'crescent',
      content : ` <div calss="custom-spinner-container">
                    <div calss="custom-spinner-box"
                  </div>
                `,
      duration: 5000
    });

    aguardeCustomizado.present();

    aguardeCustomizado.onDidDismiss(()=>{
      alert('Aguarde foi encerrado!');
    })
  }

}

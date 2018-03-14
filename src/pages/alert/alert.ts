import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl : AlertController) {
    
  }

  basicAlert(){
    let alert = this.alertCtrl.create(
      {
        title    : 'Atenção',
        subTitle : 'Curso de Ionic',
        message  : 'O valor do curso é de 20 reais!',
        buttons  : ['Ok!']
      }
    )

    alert.present();
  }

  confirmAlert(){
    let alert = this.alertCtrl.create(
      {
        title   : 'Confirmar compra',
        message : 'Tem certeza que deseja comprar este livro?',
        buttons : [
          {
            text : "Cancelar",
            role : 'cancel',
            handler: () => {
              console.log('Compra cancelada');
            }
          },
          {
            text : 'Comprar',
            handler : () => {
              console.log('Compra realizada com sucesso!');
            }
          }
        ]
      }
    );

    alert.present();
  }

  inputAlert(){
    this.alertCtrl.create(
      {
        title: 'Acesso restrito!',
        inputs: [
          {
            name        : 'Username',
            placeholder : 'Login',
            type        : 'text'
          },
          {
            name        : 'senha',
            placeholder : 'Senha',
            type        : 'password'
          },
        ],
        buttons : [
          {
            text      : 'Cancelar',
            role      : 'cancel' ,
            handler : data => {
              console.log('Autenticação Concluida');
            }
          },
          {
            text : 'Entrar',
            handler : data => {
              if(data.Username == 'paulo' && data.senha == '123'){
                console.log('Usuario autenticado');
              } 
              else{
                console.log('Seus dados não conferem')
              }
            }
          }
        ]
      }
    ).present();
  }

  radioAlert(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha uma cor');

    alert.addInput(
      {
        type: 'radio',
        label: 'Vermelho',
        value: 'red'
      }
    )

    alert.addInput(
      {
        type: 'radio',
        label: 'Azul',
        value: 'blue',
        checked : true
      }
    )

    alert.addInput(
      {
        type: 'radio',
        label: 'Verde',
        value: 'green'
      }
    )

    alert.addButton('Cancelar');

    alert.addButton({
      text : "Ok!",
      handler : (data: any) => {
        console.log('Cor selecionada', data);
      }
    })

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

}

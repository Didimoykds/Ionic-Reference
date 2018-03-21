import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  cart : any = {
    'products': {
      'Laranja' : 0,
      'Maça'    : 0,
      'Abacate' : 0,
      'Manga'   : 0,
      'Pera'    : 0,
      'Uva'     : 0,
    },
    'getItems': function (){
      const values : string[] = [];
      for(let itens in this.products){
        values.push(itens);
      }
      return values;
    }
  };

  itens : string[] = this.cart.getItems();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  adicionarItem(item){
    this.cart.products[item]++;
  }

  removerItem(item){
    if(this.cart.products[item]>0)
      this.cart.products[item]--;
  }
}

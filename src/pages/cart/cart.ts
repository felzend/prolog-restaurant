import * as _ from 'underscore';
import { ToastController, Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { HelperProvider } from '../../providers/helper/helper';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  private total: number;
  private cart: any;
  private service: StoreProvider;
  private toastCtrl: ToastController;
  private helper: HelperProvider;
  private eventsController: Events;

  constructor(public navCtrl: NavController, public events: Events, private toastController: ToastController, private storeService: StoreProvider, private helperProvider: HelperProvider, public navParams: NavParams) {
    this.service = storeService;
    this.helper = helperProvider;
    this.toastCtrl = toastController;
    this.eventsController = events;
    this.service.fetchCart().subscribe(cart => {
      this.cart = cart;
      this.mapCart();
      this.total = this.getTotalValue();
    });
  }

  mapCart() {
    if(Object.keys(this.cart).length) {
      this.cart = _.groupBy(this.cart, 'Id');
      this.cart = Object.keys(this.cart).map(key => this.cart[key]);
    }
  }

  removeFromCart(product) {
    this.service.removeFromCart(product.Id).subscribe(response => {
      this.service.fetchCart().subscribe(cart => {
        this.cart = cart;
        this.mapCart();
        this.total = this.getTotalValue();
        this.eventsController.publish('cart:remove');
      });
    });
  }

  checkout() {
    let products = [];
    let saleId = this.helper.randomInteger( this.helper.randomInteger(1, 10000), this.helper.randomInteger(22000, 9000000) );
    this.cart.forEach(list => {
      list.forEach(product => {
        products.push({
          sale: saleId,
          product: product.Id,
          price: product.Price.toFixed(2),
        });
      });
    });
    
    this.service.checkout(JSON.stringify(products)).subscribe(response => {
      this.service.fetchCart().subscribe(cart => {
        this.cart = cart;
        this.mapCart();
        this.total = this.getTotalValue();
        let toast = this.toastCtrl.create({
          'message' : `Venda de número #${saleId} realizada com sucesso!`,
          'duration': 2000,
          'position': 'top',
        });

        toast.present();
      });
    });
  }

  getTotalValue() {
    return _.reduce(this.cart, (total, products) => total + products[0].Price * products.length, 0).toFixed(2);
  }

  ionViewDidLoad() {
    
  }

}

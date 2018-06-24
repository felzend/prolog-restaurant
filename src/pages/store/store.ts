import { Events, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StoreProvider } from "../../providers/store/store";

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  private toastCtrl: ToastController;
  private service: StoreProvider;
  private products : any;
  
  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams, private storeService: StoreProvider, private toastController: ToastController) {
    this.service = storeService;    
    this.toastCtrl = toastController;
    this.service.fetchProducts().subscribe(products => this.products = products);

    events.subscribe('cart:remove', () => {
      this.service.fetchProducts().subscribe(products => this.products = products);
    });
  }

  pushToCart(product) {
    this.service.addToCart(product.Id).subscribe(response => {
      let toast = this.toastCtrl.create({
        'message' : `Produto adicionado ao carrinho: ${product.Name} (id: ${product.Id})`,
        'duration': 500,
        'position': 'top',
      });
      
      this.service.fetchProducts().subscribe(products => this.products = products);
      toast.present();
    });
  }

  ionViewDidLoad() {
    
  }

}

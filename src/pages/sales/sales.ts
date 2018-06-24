import * as _ from 'underscore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the SalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})
export class SalesPage {

  private service: StoreProvider;
  private sales: any;

  constructor(public navCtrl: NavController, public storeService: StoreProvider, public navParams: NavParams) {
    this.service = storeService;
    this.getSales();    
  }

  getSales() {
    this.service.fetchSales().subscribe(sales => {
      this.sales = sales;
      if(Object.keys(this.sales).length) {
        this.sales = _.groupBy(sales, 'Sale');
        this.sales = Object.keys(this.sales).map(key => this.sales[key]);
        this.sales.forEach(sale => {
          sale['total'] = _.reduce(sale, function(total, obj) { return total + obj.Price }, 0).toFixed(2);
        });
      }
    });
  }

}

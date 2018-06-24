import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {

  private httpClient: HttpClient;
  private apiUrl: string;

  private products: any;

  constructor(public client: HttpClient) {
      this.httpClient = client;
      this.apiUrl = "http://localhost:4000";
  }

  addToCart(id) {
    return this.httpClient.post(this.apiUrl + "/stock", {action: 'dec', product: id});
  }

  removeFromCart(id) {
    return this.httpClient.post(this.apiUrl + "/stock", {action: 'inc', product: id});
  }

  checkout(products) {
    return this.httpClient.post(this.apiUrl + "/checkout", {products: products});
  }

  fetchProducts() {
    return this.httpClient.get(this.apiUrl + "/products");
  }

  fetchCart() {
    return this.httpClient.get(this.apiUrl + "/cart");
  }

  fetchSales() {
    return this.httpClient.get(this.apiUrl + "/sales");
  }

}

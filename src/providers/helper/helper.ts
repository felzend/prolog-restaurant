import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  constructor(public http: HttpClient) {
    
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

}

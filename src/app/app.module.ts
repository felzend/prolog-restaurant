import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorePage } from '../pages/store/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreProvider } from '../providers/store/store';
import { CartPage } from '../pages/cart/cart';
import { HelperProvider } from '../providers/helper/helper';
import { SalesPage } from '../pages/sales/sales';

@NgModule({
  declarations: [
    MyApp,
    SalesPage,
    StorePage,
    CartPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalesPage,
    StorePage,
    CartPage,
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoreProvider,
    HelperProvider
  ]
})
export class AppModule {}

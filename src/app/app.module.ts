import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesPage } from './heroes/heroes.page';
import { FormsModule } from '@angular/forms';
import { HeroDetailPage } from './hero-detail/hero-detail.page';
import { MessagesComponent } from './messages/messages.component';
import{HttpClientModule} from '@angular/common/http'
import { HeroSearchPage } from './hero-search/hero-search.page';
@NgModule({
  declarations: [AppComponent,
  HeroesPage, 
  HeroDetailPage,
  MessagesComponent,
  HeroSearchPage,
  ],
  entryComponents: [],
  imports: [BrowserModule, 
    HttpClientModule,
    FormsModule,
    //HttpClientInMemoryWebApiModule.forRoot(
   //   InMemoryDataService, { dataEncapsulation: false }
    //),
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

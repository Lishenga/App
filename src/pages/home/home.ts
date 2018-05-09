import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavController, Platform, Navbar, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CreatePage } from '../create/create';
import { LandingPage } from '../landing/landing';
import { FirstLoginPage } from '../first-login/first-login';

@Component({

  selector: 'page-home',

  templateUrl: 'home.html'

})

export class HomePage {

  slides : any

  _token: Array<{fname: string, lname: string}>

  constructor(public navCtrl: NavController,private storage: Storage, private app: App) {
   
    this.storage.get('_token').then((val) => {

      this._token = val;

      if(this._token) {

        this.app.getRootNav().setRoot(LandingPage);

      }

    });

    this.slides = [
      
      {

        image: "assets/imgs/IMG-20180211-WA0006.png",
        description: "The simple and secure way to send money to East and Central African countries.",
       
      },

      {

        image: "assets/imgs/IMG-20180211-WA0006.png",
        description: "Send and receive money fast to almost anyone in the East and Central Africa Regions.",
      
      },

      {
        
        image: "assets/imgs/IMG-20180211-WA0006.png",
        description: "Chat with your loved ones in North America, United Kingdom, East and Central African countries.",
        
      }

    ];

  }

  sign() {

    // go to the MyPage component

    this.navCtrl.push(LoginPage);

  }

  create() {

    // go to the MyPage component

    this.navCtrl.push(CreatePage);

  }

}

class MyPage {

  @ViewChild(Slides) slides: Slides;

  goToSlide() {

    this.slides.slideTo(2, 500);

  }

  slideChanged() {

    let currentIndex = this.slides.slideNext(20, true);

    console.log('Current index is', currentIndex);

  }
  
}

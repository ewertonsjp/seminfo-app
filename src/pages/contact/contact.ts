import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  imagens;

  constructor(public navCtrl: NavController, public http: Http) {
    this.get().then(data => {
      this.imagens = data;
    });
  }

  like(imagem) {
    imagem.likes += 1;
  }

  get() {
    return new Promise(resolve => {
      this.http.get("https://seminfo.herokuapp.com/api/selfies").map(res => res.json()).subscribe(data => {
        resolve(data.selfies);
      });
    });
  }

}

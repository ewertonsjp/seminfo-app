import { Component } from '@angular/core';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  eventos;
  loading;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    this.loading.present().then(() => {
      this.get().then(data => {
        this.eventos = data;
        this.loading.dismiss();
      });
    });
  }

  like(evento) {
    this.loading = this.loadingCtrl.create({
      content: 'Like in progress...'
    });

    this.loading.present().then(() => {
      this.post(evento).then(data => {
        evento.likes += 1;
        this.loading.dismiss();
      });
    });
  }

  /**
   * Busca os eventos cadastrados na API
   */
  get() {
    return new Promise(resolve => {
      this.http.get("https://seminfo.herokuapp.com/api/events").map(res => res.json()).subscribe(data => {
        resolve(data.events);
      });
    });
  }

  /**
   * Dá uma like em um evento na API
   * @param event 
   */
  post(evento) {
    let body = {
      
    }
    return new Promise(resolve => {
      this.http.post('https://seminfo.herokuapp.com/api/events/' + evento.id + '/like', body).subscribe(data => {
         resolve(data);
      }, error => {
          console.log("Oooops!");
      });
    });
  }

}

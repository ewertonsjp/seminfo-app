import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  eventos;

  constructor(public navCtrl: NavController, public http: Http) {
    this.get().then(data => {
      this.eventos = data;
    });
  }

  like(evento) {
    this.post(evento).then(data => {
      evento.likes += 1;
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

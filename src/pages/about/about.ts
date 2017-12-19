import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  eventos;

  constructor(public navCtrl: NavController) {
    this.eventos = [
      {
        'autor':'Aislan Rafael',
        'img':'http://9solucoes.com.br/seminfo/images/palestras/aislan1.jpg',
        'descricao':'Inovação, empreendedorismo e aceleração de ideias no semiárido.',
        'likes':0
      },
      {
        'autor':'Rômulo Camara',
        'img':'http://9solucoes.com.br/seminfo/images/palestras/open.jpg',
        'descricao':'Desenvolvimento de projetos para a região utilizando hardware livre.',
        'likes':0
      }
    ]
  }

}

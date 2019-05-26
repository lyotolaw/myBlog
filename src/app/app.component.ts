import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title:string = "POSTS";
  posts = [
    {
      title: 'Mon premier post',
      content: 'Un pick up artist, abrégé couramment en PUA1 est un homme habile à rencontrer, attirer et séduire les femmes. Le terme vient de langlais américain, signifiant littéralement « artiste de la drague ». En France, le terme PUA offre une alternative au terme « séducteur ».',
      create_at: new Date
    },
    {
      title:'Mon deuxième post',
      content: 'Qu\'est ce qui est réellement possible de faire lorsqu\'on drague des filles ?',
      create_at: new Date     
    },
    {
      title: 'Un autre post',
      content: 'Venez voir ma chaine Youtube - LYOTO et abonnez-vous :)',
      create_at: new Date      
    }
  ];
  constructor() {} 
}

import {Component} from 'angular2/core';
import {Hero} from './heroComponent/hero';
import {ClickMeComponent} from './heroComponent/click';

@Component({
  selector: "my-app",
  directives: [ClickMeComponent],
  styles:[`
      .hero-box{width:200px;text-align:center}
      h1{background-color:red}
      h2{background-color:blue}
      li{color:yellow}
      li>span{color:pink}
      p{color:orange}
  `],
  template: `
    <div class='hero-box'>
      <h1>{{title}}</h1>
      <h2>My fav Hero is: {{ myHero.name }}</h2>
      <p>All Heroes</p>
      <ul>
          <li *ngFor='#hero of heroes;#i=index'>{{i+1}}-{{ hero.name }} <span>{{ hero.id }}</span></li>
      </ul>
      <p *ngIf="heroes.length>3">There are many Heroes</p>
      <click-me></click-me>
    </div>
  `
})

export class myApp{
    title: string;
    myHero: any;
    heroes = [
        new Hero(1,'Angular2'),
        new Hero(12,'NodeJs'),
        new Hero(23,'EcmaScript'),
        new Hero(17,'Python'),
        new Hero(21,'Java')
    ];

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = this.heroes[0];
    }
}
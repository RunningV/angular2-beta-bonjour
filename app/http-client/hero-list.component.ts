import {Component,OnInit,Injectable} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'hero-list',
  template: `
    <h3>Heroes:</h3>
    <ul>
      <li *ngFor="#hero of heroes">{{hero.name}}</li>
    </ul>
    New Hero:
    <input #newHero/>
    <button (click)="addHero(newHero)">Add Hero</button>
  `,
  providers: [
  HTTP_PROVIDERS,
  HeroService
]
})

export class HeroList implements OnInit{
  constructor(private _http: HeroService) {}


  ngOnInit() {
    this._http.getHeroes().then(data => this.heroes = data);
  }

  public heroes: Hero[];

  addHero(hero) {
    if(!hero.value) return;
    let newHero: Hero = {
      name: hero.value,
      id: this.heroes.length
    }
    this.heroes.push(newHero);
    hero.value = "";
  }

}

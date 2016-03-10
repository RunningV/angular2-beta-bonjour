import {Component} from 'angular2/core';
import {HeroList} from './hero-list.component';
//import {Hero} from './hero';

@Component({
  selector: 'http-component',
  template: `
    <h1>Tour of Heroes !</h1>
    <hero-list></hero-list>
  `,
  directives: [HeroList],
  //providers: [HTTP_PROVIDERS]
})
export class HttpComponent {}

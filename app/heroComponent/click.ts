import {Component} from 'angular2/core';

@Component({
  selector: 'heroes-list',
  template:  `
      <h3>keyup.enter adn blur event</h3>
      <input #hero (keyup.enter)='addHero(hero.value)'
         (blur)="addHero(hero.value);hero.value=''">
      <ul>
          <li *ngFor='#hero of heroes;#i = index'>{{ (i + 1) }}-{{hero}}</li>
      </ul>
  `
})

class HeroComponent {
    heroes = ['Angular2','NodeJs','Python','Linux'];
    addHero(hero:string) {
      if(hero) {
          this.heroes.push(hero);
      }
    }
}

@Component({
  selector: "click-me",
  directives:[HeroComponent],
  template: `
      <button (click)='clickMe()'>click me !</button>
      <div>
        <h2>{{ clickMsg }}</h2>
        <div>
           <h3>click event</h3>
           <button (click)='clearEventValue()'>clear values</button>
           <input (keyup)='onKey($event)'>
           <span>{{ eventValue }}</span>

           <h3>keyup event</h3>
           <input #box (keyup)='keyupTwo(box.value)'>
           <span>{{ boxValue }}</span>

           <h3>keyup.enter event</h3>
           <input #box (keyup.enter)='enterValues=box.value'>
           <span>{{ enterValues }}</span>

           <h3>keyup.blur event</h3>
           <input #box (keyup.enter)='blurValue=box.value' (blur)="blurValue=box.value">
           <span>{{ blurValue}}</span>

           <heroes-list></heroes-list>
        </div>
      </div>
  `
})
export class ClickMeComponent {
    clickMsg = '';
    eventValue = '';
    boxValue = '';
    blurValue = '';
    //enterValues = '';
    clickMe() {
       this.clickMsg = 'You are my hero !'
    }
    onKey(event:any) {
        this.eventValue += event.target.value + '|';
    }
    clearEventValue() {
        this.eventValue = '';
    }
    keyupTwo(value:string) {
        this.boxValue = value.toUpperCase();
    }

}
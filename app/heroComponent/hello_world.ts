import {Component} from "angular2/core";

@Component({
  selector: "hello-world",
  template: `
    <div>
      <p><input type="text" [(ngModel)]="myName"></p>
      <h2 [hidden]="!myName">Hello <span class="one">{{myName}}</span> !</h2>
    </div>
  `,
  styles: [`.one{color: pink;text-decoration: underline;}`]
})

export class HelloWorld {
    myName: string = "";
}
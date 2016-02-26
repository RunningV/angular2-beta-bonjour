import {Component, Input} from "angular2/core";
import {Todo} from "./todo"

@Component({
  selector: "todo-list",
  styles: [`
    .done-true{ text-decoration: line-through; color: red;}
    .text-color{ color: #000;}
    .unstyled{ list-style: none;}
  `],
  template: `<ul class="unstyled">
    <li *ngFor="#todo of todos">
      <input type="checkbox" [(ngModel)]="todo.done">
      <span class="done-{{todo.done}}"><em class="text-color">{{todo.text}}</em></span>
    </li>
  </ul>`
})

export class TodoList{
    @Input()
    todos: Todo[];
}
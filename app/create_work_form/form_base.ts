import {Component} from "angular2/core";
import {Todo} from "./todo";
import {TodoList} from "./todo_list";
import {TodoForm} from "./todo_form";

@Component({
    selector: "work-form",
    template: `
    <h2>This is a Form</h2>
    <span>{{remain}} of {{todos.length}} not chosed</span>
    [ <a (click)="archive()">Archive</a> ]
    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>
  `,
    styles: ["a{cursor:pointer; cursor:hand;}"],
    directives: [TodoList,TodoForm]
})

export class WorkForm {
    todos: Todo[] = [
        { text: "learn angular", done: true },
        { text: "study how to use git", done: false }
    ];

    get remain(): number {
        return this.todos.reduce((count: number, todo: Todo) => count + !todo.done, 0);
    }

    archive(): void {
        let oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach((todo: Todo) => {
            if (!todo.done) this.todos.push(todo);
        });
    }

    addTask(task: Todo) {
        this.todos.push(task);
    }

}
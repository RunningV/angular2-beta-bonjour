import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_PROVIDERS,ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeApp} from './home.component';
import {Article} from './article.component';
@Component({
  selector: 'route-test',
  template: `
    <div class="container">
      <h1>Route Example</h1>
      <nav>
        <a [routerLink]="['HomePage']">Home</a>
        <a [routerLink]="['Article']">Article</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES,HomeApp,Article],
  //providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/home', name: 'HomePage', component: HomeApp},
  {path: '/article', name: 'Article', component: Article, useAsDefault: true}
])

export class RouteApp {}

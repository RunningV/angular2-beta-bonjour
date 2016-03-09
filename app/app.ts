/**
 * Created by JC on 2015-09-01.
 */
// we need this to bootstrap our app
import {bootstrap} from "angular2/platform/browser";
import {LocationStrategy,HashLocationStrategy,ROUTER_PROVIDERS} from "angular2/router"
import {provide} from "angular2/core";
import {MyComponent} from './MyComponent';
import {RouteApp} from './route-test/route.component';

import {AppComponent} from "./hero-app/app.component.ts";


bootstrap(RouteApp,[ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

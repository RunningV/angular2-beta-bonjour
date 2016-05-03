/**
 * Created by JC on 2015-09-01.
 */
// we need this to bootstrap our app
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router"
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {provide} from "angular2/core";
import {RouteApp} from './route-test/route.component';


bootstrap(RouteApp,[ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import {RouteConfig, ROUTER_PROVIDERS} from 'angular2/router';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-app',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  directives: [ProductListComponent],
  providers: [ProductService, HTTP_PROVIDERS]
})

@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
  { path: '/products', name: 'Products', component: ProductListComponent}
])
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}

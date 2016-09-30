import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router, RouteParams} from 'angular2/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star-component';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent]
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    constructor (private _routeParams: RouteParams,
                 private _router: Router,
                 private _productService: ProductService) {
    }

    onBack(): void {
      this._router.navigate(['Products']);
    }

    getProduct(id: number){
      this._productService.getProduct(id)
          .subscribe(product => this.product = product,
          error => this.errorMessage = <any>error );
    }
    ngOnInit(): void {
      let id = +this._routeParams.get('id');
      this.getProduct(id);
    }
    onRatingClicked(message :string): void {
      this.pageTitle = "Product Detail: " + message; 
    }

}

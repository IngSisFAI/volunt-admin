import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { ProductApi } from '../shared/sdk/services/custom/Product';
import { ProductInterface } from '../shared/sdk/models/Product';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.scss'],
    animations: [routerTransition()]
})
export class ProductosComponent implements OnInit {
  public products: ProductInterface[] = [];
  public productSelected: ProductInterface = null;

  constructor(
    private ProductApi: ProductApi
  ) { }

  ngOnInit() {
    console.log('NgOnInit');
    this.find();
  }


  find() {
    this.ProductApi.find({include: ['unit']})
      .subscribe(products => {
          console.log('Productos: ', products);

          this.products = <any>products.slice();
          console.log(this.products);
        },
        (error) => {
          console.log('An error occured at Product-main component');
          console.log(error);
        }
      );
  }

  select(product: ProductInterface) {
    this.productSelected = Object.assign({}, product);
  }

  onCreated(product: ProductInterface) {
    this.products.push(product);
  }

  OnEdit(productUpdated: ProductInterface) {
    const indice = this.products.findIndex((tipo) => tipo.id === productUpdated.id);

    if (indice !== -1) {
      this.products[indice] = productUpdated;
    } else { }
  }
}

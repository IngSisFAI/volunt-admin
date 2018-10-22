import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { ProductApi } from '../shared/sdk/services/custom/Product';
import { ProductInterface } from '../shared/sdk/models/Product';

import swal from 'sweetalert2';

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
    // tslint:disable-next-line:no-shadowed-variable
    private ProductApi: ProductApi,
    private productService: ProductApi
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

  eliminarProducto() {
    const thisLocal = this;
    swal({
      title: '¿Está seguro?',
      text: 'Este cambio no se podrá revertir!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4CBB17',
      cancelButtonColor: '#FF2400',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.ProductApi.deleteById(this.productSelected.id)
        .subscribe(
          productEliminado => {
            let i;
            thisLocal.products.forEach(function(elem, index) {
                if (elem.id === thisLocal.productSelected.id) {
                    i = index;
                }
            });
            thisLocal.products.splice(i, 1);
            thisLocal.productSelected = null;
            swal(
              '¡Eliminado!',
              'El producto ha sido eliminado.',
              'success'
            );
          }
        );
      }
    });
  }

  onAddProducto(producto: any) {
    this.products.push(Object.assign({}, producto));
    this.productSelected = null;
  }

  onUpdateProducto(producto: any) {
    this.products.forEach(function(elem, index) {
        if (elem.id === producto.id) {
            this.products[index] = producto;
        }
    });
  }
}

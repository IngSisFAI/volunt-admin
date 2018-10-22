import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { Product, ProductInterface } from '../../shared/sdk/models/Product';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Output() nuevoProducto = new EventEmitter();

  public product: ProductInterface = new Product();

  constructor(
    private productApi: ProductApi
  ) { }

  ngOnInit() {}

  create(formulario: NgForm) {
    this.product.icon = 'https://image.flaticon.com/icons/svg/839/839245.svg';
    this.productApi
      .create(this.product).subscribe(
      (product: Product) => {
        swal({
          type: 'success',
          title: 'Producto Agregado',
          text: '¡Se ha agregado el producto con éxito!'
        });
        formulario.resetForm();
        this.nuevoProducto.emit(product);
      },
      (error) => {
        console.log('An error occured at Product-add component');
        console.log(error);
      }
      );
  }

}

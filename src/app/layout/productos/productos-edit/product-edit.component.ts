import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { Product, ProductInterface } from '../../shared/sdk/models/Product';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() productOriginal: Product;
  @Output() productEdited = new EventEmitter();

  public nombreOriginal;

  constructor(
    private productService: ProductApi
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes): void {
    console.log(this.productOriginal);
    this.nombreOriginal = this.productOriginal.name;
  }

  public update() {
    this.productService.patchAttributes(this.productOriginal.id, this.productOriginal)
    .subscribe(
      productEdited => {
        console.log('product edited: ', productEdited);
        this.nombreOriginal = productEdited.name;
        this.productEdited.emit(productEdited);
        swal({
          type: 'success',
          title: 'Cambios Guardados',
          text: '¡Los cambios se han guardado con exito!'
        });
      }
    );
  }
}

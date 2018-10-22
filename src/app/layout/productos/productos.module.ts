import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { PageHeaderModule } from '../../shared';

// Componentes de Producto
import { ProductAddComponent } from './productos-add/product-add.component';
import { ProductEditComponent } from './productos-edit/product-edit.component';
import { ProductApi } from '../shared/sdk/services/custom/Product';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKModels } from '../shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';
import { InternalStorage } from '../shared/sdk/storage/storage.swaps';

// PrimeNG
import { AccordionModule } from 'primeng/primeng';
import { SharedModule, ButtonModule, PanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/components/table/table';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        ProductosRoutingModule,
        PageHeaderModule,
        FormsModule,
        HttpClientModule,
        AccordionModule,
        SharedModule,
        ButtonModule,
        PanelModule,
        DataTableModule,
        TableModule,
        DropdownModule,
        InputTextModule
    ],
    declarations: [ProductosComponent, ProductAddComponent, ProductEditComponent],
    providers: [ProductApi, SocketConnection, SocketDriver, SDKModels, LoopBackAuth, InternalStorage]
})
export class ProductosModule {}

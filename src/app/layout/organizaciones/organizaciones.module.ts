import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionesRoutingModule } from './organizaciones-routing.module';
import { OrganizacionesComponent } from './organizaciones.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, OrganizacionesRoutingModule, PageHeaderModule],
    declarations: [OrganizacionesComponent]
})
export class OrganizacionesModule {}

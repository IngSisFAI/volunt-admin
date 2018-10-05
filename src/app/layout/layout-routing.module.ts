import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'prefix' },
            { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
            { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
            { path: 'organizaciones', loadChildren: './organizaciones/organizaciones.module#OrganizacionesModule' },
            { path: 'productos', loadChildren: './productos/productos.module#ProductosModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

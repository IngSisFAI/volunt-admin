import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-organizaciones',
    templateUrl: './organizaciones.component.html',
    styleUrls: ['./organizaciones.component.scss'],
    animations: [routerTransition()]
})
export class OrganizacionesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

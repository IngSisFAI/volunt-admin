import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OrganizacionesComponent } from './organizaciones.component';
import { OrganizacionesModule } from './organizaciones.module';

describe('OrganizacionesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ OrganizacionesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(OrganizacionesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

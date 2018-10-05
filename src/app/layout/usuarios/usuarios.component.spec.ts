import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosModule } from './usuarios.module';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          UsuariosModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { OrganizacionesModule } from './organizaciones.module';

describe('OrganizacionesModule', () => {
  let organizacionesModule: OrganizacionesModule;

  beforeEach(() => {
    organizacionesModule = new OrganizacionesModule();
  });

  it('should create an instance', () => {
    expect(organizacionesModule).toBeTruthy();
  });
});

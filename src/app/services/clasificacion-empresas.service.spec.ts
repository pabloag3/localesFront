import { TestBed } from '@angular/core/testing';

import { ClasificacionEmpresasService } from './clasificacion-empresas.service';

describe('ClasificacionEmpresasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasificacionEmpresasService = TestBed.get(ClasificacionEmpresasService);
    expect(service).toBeTruthy();
  });
});

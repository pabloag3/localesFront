import { TestBed } from '@angular/core/testing';

import { EmpresasMedidasService } from './empresas-medidas.service';

describe('EmpresasMedidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresasMedidasService = TestBed.get(EmpresasMedidasService);
    expect(service).toBeTruthy();
  });
});

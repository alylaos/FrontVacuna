import { TestBed } from '@angular/core/testing';

import { RegistrarUsuarioService } from './registrarusuario.service';

describe('RegistrarUsuarioService', () => {
  let registrarusuario: RegistrarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    registrarusuario = TestBed.inject(RegistrarUsuarioService);
  });

  it('should be created', () => {
    expect(registrarusuario).toBeTruthy();
  });
});

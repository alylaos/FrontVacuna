import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsuarioComponent } from './registrarusuario.component';

describe('RegistrarUsuarioComponent', () => {
  let component: RegistrarUsuarioComponent;
  let fixture: ComponentFixture<RegistrarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosmantenimientoComponent } from './usuariosmantenimiento.component';

describe('UsuariosmantenimientoComponent', () => {
  let component: UsuariosmantenimientoComponent;
  let fixture: ComponentFixture<UsuariosmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosmantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

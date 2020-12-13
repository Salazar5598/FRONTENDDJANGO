import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosmantenimientoComponent } from './serviciosmantenimiento.component';

describe('ServiciosmantenimientoComponent', () => {
  let component: ServiciosmantenimientoComponent;
  let fixture: ComponentFixture<ServiciosmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosmantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

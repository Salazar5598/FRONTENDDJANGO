import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosmantenimientoComponent } from './contratosmantenimiento.component';

describe('ContratosmantenimientoComponent', () => {
  let component: ContratosmantenimientoComponent;
  let fixture: ComponentFixture<ContratosmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosmantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

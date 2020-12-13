import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesmatenimientoComponent } from './clientesmatenimiento.component';

describe('ClientesmatenimientoComponent', () => {
  let component: ClientesmatenimientoComponent;
  let fixture: ComponentFixture<ClientesmatenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesmatenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesmatenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

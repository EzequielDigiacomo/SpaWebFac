import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAtletaComponent } from './detalle-atleta.component';

describe('DetalleAtletaComponent', () => {
  let component: DetalleAtletaComponent;
  let fixture: ComponentFixture<DetalleAtletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAtletaComponent]
    });
    fixture = TestBed.createComponent(DetalleAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

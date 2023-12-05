import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAtletaComponent } from './crear-atleta.component';

describe('CrearAtletaComponent', () => {
  let component: CrearAtletaComponent;
  let fixture: ComponentFixture<CrearAtletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAtletaComponent]
    });
    fixture = TestBed.createComponent(CrearAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

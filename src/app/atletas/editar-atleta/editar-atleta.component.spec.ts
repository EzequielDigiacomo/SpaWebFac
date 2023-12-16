import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtletaComponent } from './editar-atleta.component';

describe('EditarAtletaComponent', () => {
  let component: EditarAtletaComponent;
  let fixture: ComponentFixture<EditarAtletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAtletaComponent]
    });
    fixture = TestBed.createComponent(EditarAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMadreComponent } from './editar-madre.component';

describe('EditarMadreComponent', () => {
  let component: EditarMadreComponent;
  let fixture: ComponentFixture<EditarMadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMadreComponent]
    });
    fixture = TestBed.createComponent(EditarMadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

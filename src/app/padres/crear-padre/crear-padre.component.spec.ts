import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPadreComponent } from './crear-padre.component';

describe('CrearPadreComponent', () => {
  let component: CrearPadreComponent;
  let fixture: ComponentFixture<CrearPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPadreComponent]
    });
    fixture = TestBed.createComponent(CrearPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

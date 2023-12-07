import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTutorComponent } from './detalle-tutor.component';

describe('DetalleTutorComponent', () => {
  let component: DetalleTutorComponent;
  let fixture: ComponentFixture<DetalleTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTutorComponent]
    });
    fixture = TestBed.createComponent(DetalleTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

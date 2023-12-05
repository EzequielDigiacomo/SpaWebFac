import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadresComponent } from './madres.component';

describe('MadresComponent', () => {
  let component: MadresComponent;
  let fixture: ComponentFixture<MadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadresComponent]
    });
    fixture = TestBed.createComponent(MadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

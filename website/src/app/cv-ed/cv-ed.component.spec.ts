import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEdComponent } from './cv-ed.component';

describe('CvEdComponent', () => {
  let component: CvEdComponent;
  let fixture: ComponentFixture<CvEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

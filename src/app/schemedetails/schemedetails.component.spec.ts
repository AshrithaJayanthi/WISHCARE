import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemedetailsComponent } from './schemedetails.component';

describe('SchemedetailsComponent', () => {
  let component: SchemedetailsComponent;
  let fixture: ComponentFixture<SchemedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

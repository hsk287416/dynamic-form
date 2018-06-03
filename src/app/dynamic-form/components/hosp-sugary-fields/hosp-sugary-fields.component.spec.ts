import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospSugaryFieldsComponent } from './hosp-sugary-fields.component';

describe('HospSugaryFieldsComponent', () => {
  let component: HospSugaryFieldsComponent;
  let fixture: ComponentFixture<HospSugaryFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospSugaryFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospSugaryFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

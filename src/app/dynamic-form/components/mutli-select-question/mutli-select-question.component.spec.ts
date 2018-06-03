import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliSelectQuestionComponent } from './mutli-select-question.component';

describe('MutliSelectQuestionComponent', () => {
  let component: MutliSelectQuestionComponent;
  let fixture: ComponentFixture<MutliSelectQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutliSelectQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutliSelectQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

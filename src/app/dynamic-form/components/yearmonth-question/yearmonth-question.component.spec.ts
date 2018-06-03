import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearmonthQuestionComponent } from './yearmonth-question.component';

describe('YearmonthQuestionComponent', () => {
  let component: YearmonthQuestionComponent;
  let fixture: ComponentFixture<YearmonthQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearmonthQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearmonthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

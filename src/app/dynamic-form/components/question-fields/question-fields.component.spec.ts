import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { QuestionFieldsComponent } from './question-fields.component';
import { RadioQuestionComponent } from '../radio-question/radio-question.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectQuestionComponent } from '../select-question/select-question.component';
import { YearmonthQuestionComponent } from '../yearmonth-question/yearmonth-question.component';
import { ConfigModel } from '../../models/config.model';
import { GroupCreaterService } from '../../../services/group-creater.service';
import { DynamicQuestionDirective } from '../../directives/dynamic-question.directive';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('QuestionFieldsComponent', () => {
    let component: QuestionFieldsComponent;
    let fixture: ComponentFixture<QuestionFieldsComponent>;
    let groupCreater: GroupCreaterService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                QuestionFieldsComponent,
                DynamicQuestionDirective,
                RadioQuestionComponent,
                YearmonthQuestionComponent,
                SelectQuestionComponent
            ],
            providers: [
                GroupCreaterService
            ]
        }).overrideComponent(QuestionFieldsComponent, {
            set: {
                entryComponents: [
                    RadioQuestionComponent,
                    YearmonthQuestionComponent,
                    SelectQuestionComponent
                ]
            }
        }).compileComponents();
    }));

    beforeEach(inject([GroupCreaterService], (c: GroupCreaterService) => { groupCreater = c }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionFieldsComponent);
        component = fixture.componentInstance;
        let config: ConfigModel = {
            questions: [
                {
                    name: "question01",
                    content: "你的血型是什么？",
                    type: "select",
                    answerList: [
                        { id: "1", value: "A型" },
                        { id: "2", value: "B型" },
                        { id: "3", value: "AB型" },
                        { id: "4", value: "O型" }
                    ]
                },
                {
                    name: "question02",
                    content: "你的性别是什么？",
                    type: "radio",
                    answerList: [
                        { id: "1", value: "男" },
                        { id: "2", value: "女" }
                    ]
                },
                {
                    name: "question03",
                    content: "你的生日是什么？",
                    type: "yearmonth"
                }
            ],
            sugaryHospInfo: {
                hasHosp: true,
                hasSugary: true,
                sugaryHospInfos: [
                    {
                        sugaryId: "1",
                        sugaryYear: "2018",
                        sugaryMonth: "1",
                        hospYear: "2017",
                        hospMonth: "2",
                        hospPeriod: "1"
                    }
                ]
            }
        };
        let form = groupCreater.createGroup(config);
        component.group = form;
        component.questionList = config.questions;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('测试画面显示', () => {
        let de: DebugElement = fixture.debugElement;
    })
});

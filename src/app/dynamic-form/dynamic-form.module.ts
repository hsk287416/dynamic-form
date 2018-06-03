import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionFieldsComponent } from './components/question-fields/question-fields.component';
import { RadioQuestionComponent } from './components/radio-question/radio-question.component';
import { YearmonthQuestionComponent } from './components/yearmonth-question/yearmonth-question.component';
import { SelectQuestionComponent } from './components/select-question/select-question.component';
import { DynamicQuestionDirective } from './directives/dynamic-question.directive';
import { HospSugaryFieldsComponent } from './components/hosp-sugary-fields/hosp-sugary-fields.component';
import { GroupCreaterService } from '../services/group-creater.service';
import { MutliSelectQuestionComponent } from './components/mutli-select-question/mutli-select-question.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        QuestionFieldsComponent,
        RadioQuestionComponent,
        YearmonthQuestionComponent,
        SelectQuestionComponent,
        DynamicQuestionDirective,
        HospSugaryFieldsComponent,
        MutliSelectQuestionComponent
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        RadioQuestionComponent,
        YearmonthQuestionComponent,
        SelectQuestionComponent,
        MutliSelectQuestionComponent
    ],
    providers: [
        GroupCreaterService
    ]
})
export class DynamicFormModule { }

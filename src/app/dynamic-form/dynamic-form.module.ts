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
        HospSugaryFieldsComponent
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        RadioQuestionComponent,
        YearmonthQuestionComponent,
        SelectQuestionComponent
    ]
})
export class DynamicFormModule { }

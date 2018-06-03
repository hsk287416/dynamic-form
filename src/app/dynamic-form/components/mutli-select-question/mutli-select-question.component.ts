import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { QuestionModel } from '../../models/question.model';

@Component({
    selector: 'app-mutli-select-question',
    templateUrl: './mutli-select-question.component.html',
    styleUrls: ['./mutli-select-question.component.scss']
})
export class MutliSelectQuestionComponent implements OnInit {
    group: FormGroup;
    question: QuestionModel;
    questionArr: FormArray;
    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.questionArr = this.group.get(this.question.name) as FormArray;
    }

    

}

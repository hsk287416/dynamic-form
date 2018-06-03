import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuestionModel } from '../../models/question.model';

@Component({
    selector: 'app-select-question',
    templateUrl: './select-question.component.html',
    styleUrls: ['./select-question.component.scss']
})
export class SelectQuestionComponent implements OnInit {
    group: FormGroup;
    question: QuestionModel;
    constructor() { }

    ngOnInit() {
        
    }

}

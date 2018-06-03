import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuestionModel } from '../../models/question.model';

@Component({
    selector: 'app-radio-question',
    templateUrl: './radio-question.component.html',
    styleUrls: ['./radio-question.component.scss']
})
export class RadioQuestionComponent implements OnInit {
    group: FormGroup;
    question: QuestionModel;
    constructor() { }

    ngOnInit() {
        
    }

}

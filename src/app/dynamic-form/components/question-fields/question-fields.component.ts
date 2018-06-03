import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuestionModel } from '../../models/question.model';

@Component({
    selector: 'question-fields',
    templateUrl: './question-fields.component.html',
    styleUrls: ['./question-fields.component.scss']
})
export class QuestionFieldsComponent implements OnInit {
    @Input("group") group: FormGroup;
    @Input("questionList") questionList: QuestionModel[];

    questionGroup: FormGroup;

    constructor() { }

    ngOnInit() {
        this.questionGroup = this.group.get("questions") as FormGroup;
    }

}

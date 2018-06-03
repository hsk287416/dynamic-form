import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuestionModel } from '../../models/question.model';

@Component({
    selector: 'app-yearmonth-question',
    templateUrl: './yearmonth-question.component.html',
    styleUrls: ['./yearmonth-question.component.scss']
})
export class YearmonthQuestionComponent implements OnInit {
    group: FormGroup;
    question: QuestionModel;
    yearList: number[] = [];
    monthList: number[] = [];
    constructor() { }

    ngOnInit() {

        let now = new Date().getFullYear();
        for(let i = now; i >= now - 10; i--) {
            this.yearList.push(i);
        }
        for(let i = 1; i <= 12; i++) {
            this.monthList.push(i);
        }
    }

}

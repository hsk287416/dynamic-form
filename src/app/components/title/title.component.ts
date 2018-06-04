import { Component, OnInit } from '@angular/core';
import { RandomGenerateService } from '../../services/random-generate.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
    msg: string;
    constructor(
        private randomGenerateService: RandomGenerateService
    ) {
        randomGenerateService.registSubject().subscribe(value => {
            this.msg = "title: " + value;
        })
    }

    ngOnInit() {
    }

}

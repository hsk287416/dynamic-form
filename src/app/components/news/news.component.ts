import { Component, OnInit } from '@angular/core';
import { RandomGenerateService } from '../../services/random-generate.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    private msg: string;
    constructor(
        private randomGenerateService: RandomGenerateService
    ) {
        randomGenerateService.registSubject().subscribe(value => {
            this.msg = "news: " + value;
        })
    }

    ngOnInit() {

    }

    sendRandomNum(){
        this.randomGenerateService.sendNext();
    }

}

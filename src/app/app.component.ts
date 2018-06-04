import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Observer, Subject } from 'rxjs';
import { RandomGenerateService } from './services/random-generate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    msgObservable: Subject<string>;
    msg: string;

    constructor(
        private randomGenerateService: RandomGenerateService
    ) {
        randomGenerateService.registSubject().subscribe(value => {
            this.msg = value;
        })
        for(let i = 1; i <= 12; i++) {
            console.log(i + " : " + this.getLastDay(2018, i));
        }
    }

    /**
     * 获取指定年月的最后一天
     * @param  {Number} year 年份，公元年
     * @param  {Number} month 月份有效值1~12
     * @return {Number} 返回1~31之间的一个数
     */
    getLastDay(year, month) {
        var d = new Date(0);
        if (month == 12) {
            d.setUTCFullYear(year + 1);
            d.setUTCMonth(0);
        }
        else {
            d.setUTCFullYear(year);
            d.setUTCMonth(month);
        }
        d.setTime(d.getTime() - 1);
        return d.getUTCDate();
    }
}

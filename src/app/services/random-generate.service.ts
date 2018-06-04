import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { NextObserver } from 'rxjs/Observer';

@Injectable()
export class RandomGenerateService {

    private randomSubject: Subject<string>
    constructor() { 
        this.randomSubject = new Subject<string>();
    }

    registSubject(): Subject<string> {
        return this.randomSubject;
    }

    sendNext(){
        this.randomSubject.next(Math.random() * 100 + "---");
    }
}

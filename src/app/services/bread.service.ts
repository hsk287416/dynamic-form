import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BreadService {
    private breadSubject: Subject<BreadModel[]>;
    constructor() { 
        this.breadSubject = new Subject<BreadModel[]>();
    }

    listenBread(): Subject<BreadModel[]> {
        return this.breadSubject;
    }

    setBread(key: BreadEnum, breadArr: BreadModel[]) {
        localStorage.setItem(key.toString(), JSON.stringify(breadArr));
        this.breadSubject.next(breadArr);
    }

    updateBread(key: BreadEnum, bread: BreadModel) {
        let arr: BreadModel[] = JSON.parse(localStorage.getItem(key.toString())) as BreadModel[];
        arr = arr.map(model => {
            if (model.name == key.toString()) {
                model.url = bread.url;
                model.actived = bread.actived;
            }
            return model;
        });

        localStorage.setItem(key.toString(), JSON.stringify(arr));
        this.breadSubject.next(arr);
    }

    showLastestBread(key: BreadEnum){
        this.breadSubject.next(JSON.parse(localStorage.getItem(key.toString())) as BreadModel[]);
    }

}

export enum BreadEnum{
    MAIN_BREAD = "main-bread",
    DIS_BREAD = "dis-bread",
    RESP_BREAD = "resp-bread"
}

export interface BreadModel{
    url: string;
    name: string;
    actived: boolean;
}

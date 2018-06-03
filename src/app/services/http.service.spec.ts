import { TestBed, inject, fakeAsync, tick, async } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';
import { ProductModel } from '../models/product.model';

describe('HttpService', () => {
    let service: HttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [HttpService]
        });
    });

    beforeEach(inject([HttpService], (s: HttpService) => { service = s }));

    it('get method', async(() => {
        service.get<ProductModel>("products/3").subscribe(p => {
            console.log(p);
            expect(p.id).toEqual('3');
            expect(p.name).toEqual("吸尘器");
            expect(p.price).toEqual(500);
            expect(p.desc).toEqual("这个吸尘器虽然便宜，但是容易发热，质量一般");
        })
    }));

    it('post json', async(() => {
        let p: ProductModel = {
            name: "冰箱",
            price: 12000,
            desc: "海尔冰箱"
        }
        service.postJson("products", p).subscribe(res => {
            expect(res.name).toEqual(p.name);
            expect(res.price).toEqual(p.price);
            expect(res.desc).toEqual(p.desc);
        });
    }))

    
});

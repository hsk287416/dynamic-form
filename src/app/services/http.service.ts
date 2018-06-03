import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
    private address: string = "http://127.0.0.1:3000/";
    constructor(
        private http: Http
    ) { }

    get<T>(url: string): Observable<T>{
        return this.http.get(this.address + url).map(res => res.json()) as Observable<T>;
    }

    postJson(url: string, body: any) {
        return this.http.post(this.address + url, body, {
            headers: new Headers({'Content-Type': 'application/json'})
        }).map(res => res.json());
    }
}

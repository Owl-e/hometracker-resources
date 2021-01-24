import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ModulesService {

    constructor(private httpClient: HttpClient) { }

    public getModule(name: string): Observable<any> {
        return this.httpClient.get(`/controller/${name}`);
    }

}

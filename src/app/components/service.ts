import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {IResults} from '../interface/results'
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';

//Inject the Service using Observable for Iresults array.
@Injectable()
export class BarService {
  constructor(private _http: Http){}
  getService(): Observable<IResults[]>
  {
    //Give the JSON object results for bar service.
    return this._http.get("http://pb-api.herokuapp.com/bars").map((res: Response) =><IResults[]> res.json());
    
  }
}

// NG
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

  private url = 'http://dev.api.fooddocs.ee/testtask';

  constructor(private http: HttpClient, ) {}

  getPeople(): Observable<any> {
    return this.http.get(this.url);
  }
}

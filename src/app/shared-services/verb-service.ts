import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Verb} from '../shared/verb';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class VerbService {

  private URL = 'http://localhost:8080/api';
  private headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  private httpOptions = {
    headers: this.headers
  };

  private verbs: Verb[] = [];

  constructor(private http: HttpClient) {}

  addVerb(verb: Verb): Observable<Verb> {
    return this.http.post<Verb>(this.URL + '/verb', verb, this.httpOptions);
  }

  getAllVerbsRandOrder() {
    return this.http.get<Verb[]>(this.URL + '/verbs/order/random');
  }

  getAllVerbs() {
    return this.http.get<Verb[]>(this.URL + '/verbs');
  }

  setVerbs(verbs: Verb[]) {
    this.verbs = verbs;
  }

  getVerbs(): Verb[] {
    return this.verbs;
  }
}

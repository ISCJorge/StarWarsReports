import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class ApiSwapi {

  baseUrl: string = 'https://swapi.dev/api/';

  constructor(private _http: HttpClient) {}

  getPlanets(httpParams:any): Observable<Response> {
    return this._http.get<Response>(`${this.baseUrl}planets/`, { params: httpParams });
  }

  getPeoples(): Observable<Response> {
    return this._http.get<Response>(`${this.baseUrl}people/`);
  }

  getPeoplesByOrder(httpParams:any): Observable<Response> {
    return this._http.get<Response>(`${this.baseUrl}people/`, { params: httpParams });
  }

  getPeople(url): Observable<Response> {
    return this._http.get<Response>(`${url}`);
  }
}

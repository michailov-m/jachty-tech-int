import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Yacht } from 'src/models/yacht';
import { Observable } from 'rxjs';
import { RezerwacjaFormularz } from 'src/models/rezerwacja-formularz';

@Injectable({
  providedIn: 'root'
})
export class YachtService {

  private rootUrl: string;

  constructor(private http: HttpClient) {
    this.rootUrl = 'http://localhost:8080/';
  }

  getYachts(): Observable<Yacht[]> {
    return this.http.get<Yacht[]>(this.rootUrl + 'jachty/all');
  }

  getYachtsByType(typeId: number): Observable<Yacht[]> {
    return this.http.get<Yacht[]>(this.rootUrl + `jacht/${typeId}`);
  }

  postBookYacht(bookingForm: RezerwacjaFormularz): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(this.rootUrl + `/jacht/rezerwuj`, bookingForm,httpOptions);
  }
}

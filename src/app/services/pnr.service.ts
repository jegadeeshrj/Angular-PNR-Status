import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PnrService {

  private apiUrl = 'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus';

  constructor(private http: HttpClient) {}

  getPnrStatus(pnr: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '3bb2be820dmshdac77a898807980p190bcdjsn35324d7846ed',
      'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
    });

    return this.http.get(`${this.apiUrl}/${pnr}`, { headers });
  }
}
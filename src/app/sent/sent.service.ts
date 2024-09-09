import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentService {
  private backUrl: string = "http://127.0.0.1:5001"

  constructor(private http: HttpClient) { }

  refreshStatus(id : string): Observable<string> {
    return this.http.get<string>(`${this.backUrl}//api/check-status/${id}`)
  }

  }

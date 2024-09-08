import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PQRS } from './pqrs'

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  private backUrl: string = "http://127.0.0.1:5001"

  constructor(private http: HttpClient) { }

  crearPQR(pqr:PQRS): Observable<PQRS> {
    return this.http.post<PQRS>(`${this.backUrl}/pqrs`, pqr)
  }

  }

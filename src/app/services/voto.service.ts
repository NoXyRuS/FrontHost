import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotoService {
  private apiUrl = 'http://134.209.74.110:8081/api/votos';

  constructor(private http: HttpClient) {}


  crearVoto(votoData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, votoData);
  }

  obtenerHashVoto(transactionHash: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/evento/${transactionHash}`);
  }
}

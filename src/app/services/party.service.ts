import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private selectedPartySubject = new BehaviorSubject<any>(null);
  selectedParty$ = this.selectedPartySubject.asObservable();

  constructor(private http: HttpClient) {}

  setParty(party: any) {
    this.selectedPartySubject.next(party);
  }
  

  getParty() {
    return this.selectedPartySubject.getValue();
  }

  // Método para obtener partidos y candidatos desde el backend
  getParties(): Observable<any> {
    const url = 'http://localhost:8080/api/partidos'; // Cambia esta URL a la de tu backend
    return this.http.get<any>(url);
  }

  // party.service.ts
    getSelectedPartyId(): number | null {
      const party = this.selectedPartySubject.getValue();
      return party ? party.idPartido : null;
    }


  
}

import { Component, OnInit } from '@angular/core';
import { PartyService } from './services/party.service'; 
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { PartidoService } from './services/partido.service'; 
import { CandidatoService } from './services/candidato.service';
import { Partido } from './models/partido';  
import { Candidato } from './models/candidato';  
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface AppPage {
  title: string;
  url: string;
  icon: string;
  parties?: { name: string; title: string; candidates: Candidato[] }[]; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages: AppPage[] = [
    { title: 'Inicio / Perfil', url: '/folder/Inbox/perfil', icon: 'home' },
    { title: 'Votar', url: '/folder/Inbox/voto', icon: 'finger-print' },
    { title: 'Verificar Voto', url: '/folder/Inbox/verificar-voto', icon: 'cloud-done' },
  ];

  usuarioLogueado: string | null = null; // Variable para almacenar el estado del usuario

  constructor(
    private authService: AuthService,
    private partyService: PartyService,
    private router: Router,
    private partidoService: PartidoService, 
    private candidatoService: CandidatoService
  ) {
    // Suscribirse a los cambios en el estado de autenticación
    this.authService.usuarioAutenticado$.subscribe(usuario => {
      this.usuarioLogueado = usuario; // Actualiza el estado del usuario logueado
    });
  }

  ngOnInit() {
    this.loadParties(); // Cargar los partidos y candidatos
  }

  // Método para cargar los partidos y candidatos desde el servicio
  loadParties() {
    this.partidoService.getPartidos().subscribe(parties => {
      const candidatosPage: AppPage = {
        title: 'Candidatos',
        url: '/folder/Inbox/candidatos',
        icon: 'person',
        parties: [], // Inicializa como un array vacío
      };

      const requests = parties.map((party: Partido) => {
        return this.getCandidatesForParty(party.idPartido).pipe(
          map(candidates => ({
            idPartido: party.idPartido,
            name: party.nombre,
            title: party.nombre,
            candidates: candidates,
          }))
        );
      });

      forkJoin(requests).subscribe(results => {
        candidatosPage.parties = results; // Asigna el resultado a parties
        this.appPages.push(candidatosPage); // Agregar la página de candidatos al menú
      });
    });
  }

  private getCandidatesForParty(partyId: number): Observable<Candidato[]> {
    return this.candidatoService.getCandidatosByPartido(partyId);
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout();
    this.router.navigate(['/folder/login']);
  }

  // Método para seleccionar un partido
  selectParty(party: any) {
    this.partyService.setParty(party); 
    this.router.navigate(['/folder/Inbox/candidatos']);
  }
}

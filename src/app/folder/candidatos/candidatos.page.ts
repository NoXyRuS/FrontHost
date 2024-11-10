import { Component, OnInit } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import { CandidatoService } from 'src/app/services/candidato.service'; 
import { Candidato } from 'src/app/models/candidato'; 

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.page.html',
  styleUrls: ['./candidatos.page.scss'],
})
export class CandidatosPage implements OnInit {
  public selectedParty: any = null;
  public candidates: Candidato[] = [];

  constructor(
    private partyService: PartyService,
    private candidatoService: CandidatoService
  ) {}

  ngOnInit() {
    this.partyService.selectedParty$.subscribe(party => {
      console.log('Selected party in CandidatosPage:', party); // Verifica el valor del partido
      this.selectedParty = party;
      if (party) {
        this.loadCandidates(party.idPartido); // Asegúrate de que party.idPartido tenga valor
      }
    });
  }
  

  loadCandidates(idPartido: number) {
    if (idPartido) {
        this.candidatoService.getCandidatosByPartido(idPartido).subscribe(
            (data: Candidato[]) => {
                console.log('Candidatos cargados:', data); // Agrega este log
                this.candidates = data;
            },
            (error) => {
                console.error('Error al cargar los candidatos:', error);
            }
        );
    } else {
        console.error('ID de partido es undefined');
    }
}

  
}

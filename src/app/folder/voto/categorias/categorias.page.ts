import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service'; // Ajusta la ruta si es necesario
import { Candidato } from 'src/app/models/candidato';  // Ajusta la ruta si es necesario

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  tituloCategoria: string = 'Elección Presidencial 2024';
  candidatos: Candidato[] = []; // Cambiado a tipo Candidato
  candidatoSeleccionado: Candidato | null = null; // Para almacenar el candidato seleccionado

  constructor(private candidatoService: CandidatoService, private router: Router) {}

  ngOnInit() {
    this.obtenerCandidatos(); // Llama a la función para obtener los candidatos
  }

  obtenerCandidatos() {
    this.candidatoService.getCandidatos().subscribe(
      (data) => {
        this.candidatos = data; // Asigna la respuesta a la propiedad candidatos
      },
      (error) => {
        console.error('Error al obtener los candidatos:', error);
      }
    );
  }

  verificarSeleccion(candidato: Candidato) {
    // Aquí puedes agregar cualquier lógica que necesites al seleccionar un candidato
    console.log("Candidato seleccionado:", candidato);
  }

  siguienteCategoria() {
    // Lógica para pasar a la siguiente categoría
    this.router.navigate(['/folder/Inbox/voto/resumen'], {
      state: { candidato: this.candidatoSeleccionado }
    });
  }
}

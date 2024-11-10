import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/candidato'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {

  candidatoSeleccionado: Candidato | null = null; // Aquí almacenamos el candidato seleccionado

  constructor(private router: Router) {}

  ngOnInit() {
    // Recuperar los datos pasados desde la página anterior
    const navigation = this.router.getCurrentNavigation();
    this.candidatoSeleccionado = navigation?.extras?.state?.['candidato'] || null;
  
    // Verificar si se recibieron los datos correctamente
    if (this.candidatoSeleccionado) {
      console.log("Candidato seleccionado:", this.candidatoSeleccionado);
    } else {
      console.error("No se encontró el candidato seleccionado");
    }
  }
  

  regresar() {
    this.router.navigate(['/folder/Inbox/voto/categorias']);
  }

  confirmarVoto() {
    this.router.navigate(['/folder/Inbox/voto/hash']);
  }
}

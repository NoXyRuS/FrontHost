import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/candidato'; // Ajusta la ruta si es necesario
import { VotoService } from 'src/app/services/voto.service'; // Asegúrate de que esta ruta sea correcta
import { UsuarioService } from 'src/app/services/usuario.service'; // Servicio para obtener el usuario logueado (si aplica)

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  candidatoSeleccionado: Candidato | null = null; // Aquí almacenamos el candidato seleccionado
  usuarioId: number = 0; // ID del usuario

  constructor(
    private router: Router,
    private votoService: VotoService,
    private usuarioService: UsuarioService // Asegúrate de tener un servicio para obtener el usuario logueado
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.candidatoSeleccionado =
      navigation?.extras?.state?.['candidato'] || null;

    // Obtener el ID del usuario desde localStorage (o usar el servicio si prefieres)
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.usuarioId = parseInt(storedUserId, 10);
    }

    if (this.candidatoSeleccionado) {
      console.log('Candidato seleccionado:', this.candidatoSeleccionado);
    } else {
      console.error('No se encontró el candidato seleccionado');
    }
  }

  regresar() {
    this.router.navigate(['/folder/Inbox/voto/categorias']);
  }

  realizarVoto(voto: any) {
    this.votoService.registrarVoto(voto).subscribe(
      (hash: string) => {
        // Navegar a la página del hash con el valor recibido
        this.router.navigate(['/hash'], { queryParams: { hash } });
      },
      (error) => {
        console.error('Error al registrar el voto:', error);
        alert('Hubo un problema al registrar tu voto.');
      }
    );
  }
}

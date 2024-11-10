import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage {
  videoUrl: string = 'http://127.0.0.1:5000/video_feed'; // URL del backend Flask

  constructor(
    private router: Router,
    private http: HttpClient
  ){
    this.iniciarVerificacion();
  }

  iniciarVerificacion(){
    const verificarUsuario = setInterval(() => {
      this.http.get('http://127.0.0.1:5000/usuario_recibido')
        .subscribe(
          (respuesta : any) => {
            console.log(respuesta)
            if(respuesta) {
              clearInterval(verificarUsuario);
              this.recibirDatos(respuesta);
            }
          },
          error => {
            console.error("Error al obtener los datos del usuario: ", error);
          }
        )
    })
  }

  recibirDatos(usuario: any) {
    if (usuario) {
      const { id_usuario, nombre, apellidos } = usuario;  // Usa la clave adecuada

      console.log(`Usuario encontrado: ID: ${id_usuario}, Nombre: ${nombre} ${apellidos}`);

      // Cambiar la ruta
      this.router.navigate(['/folder/Inbox/voto/categorias']);
    } else {
      console.log("No se encontró el usuario.");
    }
  }
}
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage {
  // Nueva URL de Ngrok para el flujo de video
  videoUrl: string = 'https://0f72-2001-1388-28a1-5cec-c80b-6ccc-7a74-bfc6.ngrok-free.app/video_feed'; // URL del backend Flask

  @ViewChild('videoElement', { static: false }) videoElementRef!: ElementRef;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.iniciarVerificacion();
  }

  ngAfterViewInit() {
    // Esto se ejecuta una vez que el componente se ha cargado completamente
    const videoElement = this.videoElementRef.nativeElement;
    if (videoElement) {
      videoElement.src = this.videoUrl;  // Asignar la URL del stream al video
      videoElement.play();  // Reproducir el video
    }
  }

  iniciarVerificacion() {
    const verificarUsuario = setInterval(() => {
      this.http.get('https://0f72-2001-1388-28a1-5cec-c80b-6ccc-7a74-bfc6.ngrok-free.app/usuario_recibido')
        .subscribe(
          (respuesta: any) => {
            console.log(respuesta);  // Verificar que la respuesta es la esperada
            if (respuesta && respuesta.status === 'success') {
              clearInterval(verificarUsuario);
              this.recibirDatos(respuesta);
            }
          },
          error => {
            console.error("Error al obtener los datos del usuario: ", error);
          }
        );
    }, 1000);  // Realizar la verificación cada 1 segundo
  }

  recibirDatos(usuario: any) {
    if (usuario) {
      const { id_usuario, nombre, apellidos } = usuario;
      console.log(`Usuario encontrado: ID: ${id_usuario}, Nombre: ${nombre} ${apellidos}`);

      // Redirigir a la siguiente página
      this.router.navigate(['/folder/Inbox/voto/categorias']);
    } else {
      console.log("No se encontró el usuario.");
    }
  }
}

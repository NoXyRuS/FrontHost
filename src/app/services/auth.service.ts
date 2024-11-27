import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private usuarioAutenticadoSubject: BehaviorSubject<any | null>;
  public usuarioAutenticado$: Observable<any | null>;

  constructor(private http: HttpClient) {
    this.usuarioAutenticadoSubject = new BehaviorSubject<any | null>(null);
    this.usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();

    // Verificar si hay un usuario autenticado al iniciar el servicio (por ejemplo, si se recargó la página)
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado) {
      this.usuarioAutenticadoSubject.next(JSON.parse(usuarioLogueado));
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://134.209.74.110:8081/auth/login', { email, password })
      .pipe(
        tap(response => {
          console.log('Inicio de sesión exitoso:', response); // Verificar la respuesta
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('usuarioLogueado', JSON.stringify(response)); // Guarda la información del usuario en localStorage
          localStorage.setItem('authToken', response.token); // Asegúrate de guardar el token aquí
  
          // Verificar si el token se ha almacenado correctamente
          console.log('Token almacenado:', localStorage.getItem('authToken')); 
  
          this.usuarioAutenticadoSubject.next(response); // Actualiza el BehaviorSubject con el usuario autenticado
        },
        error => {
          console.error('Error en el inicio de sesión:', error);
        })
      );
  }
  
  
  logout(): void {
    localStorage.removeItem('usuarioLogueado');
    this.usuarioAutenticadoSubject.next(null);
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('usuarioLogueado');
  }

  // Método para obtener el usuario autenticado
  getUsuarioAutenticado(): Observable<any | null> {
    return this.usuarioAutenticado$;
  }

  getUsuarioId(): number | null {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado !== null) {
      const usuario = JSON.parse(usuarioLogueado);
      return usuario.usuarioId; // Suponiendo que usuarioId es un número
    }
    return null; // Manejar el caso donde no se encuentra 'usuarioLogueado'
  }
  getAuthenticatedUserId(): number | null {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    console.log('Usuario logueado:', usuarioLogueado); // Verifica qué contiene usuarioLogueado en la consola
    if (usuarioLogueado !== null) {
      try {
        const usuario = JSON.parse(usuarioLogueado);
        console.log('ID de usuario:', usuario.usuarioId); // Verifica que 'usuarioId' sea el campo correcto
        return usuario.usuarioId;
      } catch (error) {
        console.error('Error al parsear usuarioLogueado:', error);
        return null;
      }
    }
    return null; // Manejar el caso donde no se encuentra 'usuarioLogueado'
  }

  getToken(): string | null {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado !== null) {
      const usuario = JSON.parse(usuarioLogueado);
      const token = usuario.token; // Asegúrate de que este campo sea correcto
      console.log('Token recuperado:', token); // Verificar el token recuperado
      return token;
    }
    return null;
  }
  
  
  
}

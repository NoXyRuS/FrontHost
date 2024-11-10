import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service'; 
import { UsuarioVotante } from 'src/app/models/usuario-votante';
import { Router } from '@angular/router'; // Importa Router para redirigir después del logout

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: UsuarioVotante | null = null; // Variable para almacenar los datos del usuario

  constructor(
    private userService: UsuarioService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserProfile(); // Cargar el perfil del usuario al iniciar
  }

  loadUserProfile() {
    this.userService.getUserProfile().subscribe(
      (data: UsuarioVotante) => {
        this.user = data; // Asigna los datos del usuario a la variable
        console.log('Perfil de usuario:', this.user); 
      },
      error => {
        console.error('Error al cargar el perfil', error);
        // Aquí podrías manejar el error, como redirigir a una página de error
      }
    );
  }

  logout() {
    // Aquí puedes agregar la lógica para eliminar el token de sesión
    localStorage.removeItem('token'); // Elimina el token de sesión del almacenamiento local
    this.userService.setUserId(null); // Restablecer el ID del usuario
    this.userService.setUser(null); // Si tienes un método para eliminar el usuario almacenado

    // Redirigir a la página de inicio o de login
    this.router.navigate(['/login']); // Cambia la ruta según tu aplicación
  }
}

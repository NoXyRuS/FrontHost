import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'; // Importa UsuarioService
import { ToastController } from '@ionic/angular'; // Para mostrar el toast de error

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  signInForm: FormGroup;
  registroExitoso: boolean = false;
  passwordVisible: boolean = false;
  errorMessage: string = ''; // Variable para el mensaje de error

  constructor(
    private fb: FormBuilder, 
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController // Inyectamos el ToastController para mostrar errores
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Validador personalizado para la contraseña (opcional)
  passwordValidator(control: any) {
    const value = control.value;
    if (!/[A-Z]/.test(value)) {
      return { missingUpperCase: true };
    }
    if (!/[a-z]/.test(value)) {
      return { missingLowerCase: true };
    }
    if (!/[0-9]/.test(value)) {
      return { missingNumber: true };
    }
    if (!/[@#$%^&+=!]/.test(value)) {
      return { missingSpecialChar: true };
    }
    return null;
  }

  // Cambiar entre los modos de inicio de sesión y registro (si es necesario)
  togglePanel(signUpMode: boolean): void {
    const container = document.getElementById('container');
    if (signUpMode) {
      container?.classList.add('right-panel-active');
    } else {
      container?.classList.remove('right-panel-active');
    }
  }

  // Función para manejar el inicio de sesión
  onSignIn(): void {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      
      // Llamar al servicio de autenticación para realizar el login
      this.authService.login(email, password).subscribe(
        (response: any) => {
          console.log('Inicio de sesión exitoso:', response);
          this.router.navigate(['/folder/Inbox/perfil']); // Redirige a la página de perfil o inicio
        },
        (error: any) => {
          console.error('Error en el inicio de sesión:', error);
          this.handleError(error); // Llamamos a una función para manejar los errores
        }
      );
    } else {
      console.error('Formulario inválido. Revise los campos.');
      this.errorMessage = 'Por favor, complete todos los campos correctamente.'; // Mensaje de error si el formulario es inválido
      this.presentToast(this.errorMessage); // Mostrar mensaje de error con Toast
    }
  }

  // Función para manejar los errores de autenticación
  handleError(error: any): void {
    if (error.status === 401) {
      this.errorMessage = 'Usuario o contraseña incorrectos.'; // Error de autenticación
    } else {
      this.errorMessage = 'Ocurrió un error al iniciar sesión. Inténtalo nuevamente.'; // Error genérico
    }

    // Mostrar el mensaje de error con un toast
    this.presentToast(this.errorMessage);
  }

  // Función para mostrar un Toast con el mensaje de error
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duración del toast en ms
      position: 'top', // Posición del toast
      color: 'danger', // Color rojo para indicar un error
    });
    toast.present();
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'; // Importa UsuarioService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  signInForm: FormGroup;
  registroExitoso: boolean = false;
  passwordVisible: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router) {



    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

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

  togglePanel(signUpMode: boolean): void {
    const container = document.getElementById('container');
    if (signUpMode) {
      container?.classList.add('right-panel-active');
    } else {
      container?.classList.remove('right-panel-active');
    }
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      
      this.authService.login(email, password).subscribe(
        (response: any) => {
          console.log('Inicio de sesión exitoso:', response);
          this.router.navigate(['/folder/Inbox/perfil']); // Redirige a la página de inicio
        },
        (error: any) => {
          console.error('Error en el inicio de sesión:', error);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      );
    } else {
      console.error('Formulario inválido. Revise los campos.');
      // Aquí puedes mostrar un mensaje de error al usuario si el formulario no es válido
    }
  }
  
}

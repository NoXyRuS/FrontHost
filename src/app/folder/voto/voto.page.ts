import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voto',
  templateUrl: './voto.page.html',
  styleUrls: ['./voto.page.scss'],
})
export class VotoPage implements OnInit {

  constructor(private router: Router) {}

  iniciarVerificacion() {
    // Lógica para iniciar la verificación facial (más adelante)
    // Redirige a la siguiente pantalla de categorías
    this.router.navigate(['/folder/Inbox/voto/verificacion']);
  }

  ngOnInit() {
  }

}

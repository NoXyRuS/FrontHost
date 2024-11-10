import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'; // Para copiar el hash
import { Router } from '@angular/router';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.page.html',
  styleUrls: ['./hash.page.scss'],
})
export class HashPage implements OnInit {

  hashVoto: string = 'abc123def456ghi789'; // Simulación del hash

  constructor(private clipboard: Clipboard, private router: Router) {}

  copiarHash() {
    // Copiar el hash al portapapeles
    this.clipboard.copy(this.hashVoto);
    alert('Hash copiado al portapapeles');
  }


  ngOnInit() {}
}

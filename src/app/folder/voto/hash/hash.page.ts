import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.page.html',
  styleUrls: ['./hash.page.scss'],
})
export class HashPage implements OnInit {
  hashVoto: string = '';

  constructor(private route: ActivatedRoute, private clipboard: Clipboard) {}

  ngOnInit() {
    // Obtener el hash desde los parámetros de la ruta
    this.route.queryParams.subscribe((params) => {
      this.hashVoto = params['hash'] || 'Hash no disponible';
    });
  }

  copiarHash() {
    // Copiar el hash al portapapeles
    this.clipboard.copy(this.hashVoto);
    alert('Hash copiado al portapapeles');
  }
}

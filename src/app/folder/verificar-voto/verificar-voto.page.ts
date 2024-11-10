import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verificar-voto',
  templateUrl: './verificar-voto.page.html',
  styleUrls: ['./verificar-voto.page.scss'],
})
export class VerificarVotoPage {
  hashVoto: string = '';

  constructor(private alertController: AlertController) {}

  async verificarVoto() {
    // Aquí podrías agregar la lógica para validar el hash

    const alert = await this.alertController.create({
      header: 'Validación de Voto',
      message: 'Tu voto ha sido validado exitosamente. Hemos registrado tu participación de manera segura, y puedes estar seguro de que ha sido contado correctamente. Gracias por contribuir con tu voto, el proceso se ha completado sin inconvenientes.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

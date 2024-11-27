import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { VotoService } from 'src/app/services/voto.service'; 

@Component({
  selector: 'app-verificar-voto',
  templateUrl: './verificar-voto.page.html',
  styleUrls: ['./verificar-voto.page.scss'],
})
export class VerificarVotoPage {
  hashVoto: string = '';

  constructor(
    private alertController: AlertController,
    private votoService: VotoService
  ) {}

  async verificarVoto() {
    if (!this.hashVoto) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa un hash para verificar.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.votoService.verificarVoto(this.hashVoto).subscribe(
      async (response: string) => {
        const alert = await this.alertController.create({
          header: 'Resultado de la Verificación',
          message: response,
          buttons: ['OK'],
        });
        await alert.present();
      },
      async (error: any) => {
        console.error('Error al verificar el voto:', error);
        const alert = await this.alertController.create({
          header: 'Error',
          message:
            'Ocurrió un problema al verificar el voto. Intenta nuevamente más tarde.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}

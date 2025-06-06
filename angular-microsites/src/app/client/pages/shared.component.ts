import { Component, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QrCodeComponent } from 'ng-qrcode';
import { DataService } from '../service/data.service';

@Component({
    template: `
      <div class="w-full flex flex-col justify-center items-center">
        <p class="text-gray-400">Compartilhe o qrcode do seu condomínio</p>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-3 py-10">
        <qr-code
          [value]="url"
          size="250"
          errorCorrectionLevel="L"
          centerImageSrc="undefined"
          centerImageSize="80"
          [margin]="2">
        </qr-code>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-3">
        <a [routerLink]="['../']" class=" text-gray-600 font-bold py-2 px-4 rounded">
          Voltar
        </a>
      </div>
    `,
    standalone: true,
    imports: [
        RouterLink,
        QrCodeComponent
    ],
})
export class SharedComponent {
    isDataReady = computed(() => Object.keys(this.dataClient.data()).length > 0);
    dadosClient: any;

    constructor(private dataClient: DataService) {
      effect(() => {
        if (Object.keys(this.dataClient.data()).length > 0) {
          this.dadosClient = this.dataClient.data();
        }
      });
    }

    get url() {
      const dadosClient = this.dadosClient;
      return [window.location.origin, 'client', dadosClient.domain].join('/');
    }
}
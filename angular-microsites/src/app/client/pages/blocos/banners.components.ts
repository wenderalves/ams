import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BaseUrlPipe } from '../../../shared/pipes/baseUrl.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bloco-banners',
  imports: [CommonModule, BaseUrlPipe, RouterLink],
  styles: [
    `
    :host {
      width: 100%;
    }
    `,
  ],
  template: `
    @if( banners().length > 0 ) {
      <!-- sessao de banners -->
      <section class="w-full flex flex-col items-center justify-start gap-4">
        @for(banner of banners(); track $index) {
          @if (banner.href?.startsWith('http')) {
            <a [href]="[banner.href | baseUrl]" target="_blank" class="w-full">
              <ng-container
                *ngTemplateOutlet="bannerTemplate; context: { $implicit: banner }"
              ></ng-container>
            </a>
          } @else {
            <a [routerLink]="[banner.href | baseUrl]" class="w-full">
              <ng-container
                *ngTemplateOutlet="bannerTemplate; context: { $implicit: banner }"
              ></ng-container>
            </a>
          }
        }
      </section>
    }

    <ng-template #bannerTemplate let-banner>
      @if (banner.onlyBanner) {
        @if ((!banner.de && !banner.ate) || (this.isDateValid(banner.de, banner.ate))) {
          <ng-container
            *ngTemplateOutlet="bannerImagemTemplate; context: { $implicit: banner }"
          ></ng-container>
        }
      } @else {
        <ng-container
          *ngTemplateOutlet="bannerPadraoTemplate; context: { $implicit: banner }"
        ></ng-container>
      }
    </ng-template>

    <ng-template #bannerPadraoTemplate let-banner>
      <div
        [ngStyle]="{
          'background-image':
            'linear-gradient(rgb(214 214 214 / 36%), rgb(234 234 234 / 90%)), url(' +
            getUrl(banner.image) +
            ')'
        }"
        class="relative overflow-hidden p-4 bg-cover bg-center bg-opacity-70 border-4 border-white rounded-lg shadow-lg flex items-start justify-end flex-col w-full min-h-[200px]"
      >
        <h2 class="text-lg font-bold text-gray-700">{{ banner.title }}</h2>
        <p class="text-xs text-gray-700">
          {{ banner.describe }}
        </p>
        @if (banner.emBreve) {
          <div class="absolute flex items-center justify-center top-16 -right-22 w-full h-12 p-2 bg-zinc-800
            font-bold uppercase text-white rotate-45">
            EM BREVE
          </div>
        }
      </div>
    </ng-template>

    <ng-template #bannerImagemTemplate let-banner>
      <div class="relative overflow-hidden bg-cover bg-center bg-opacity-70 border-4 border-white rounded-lg shadow-lg flex
        items-start justify-end flex-col w-full max-h-72"
      >
        <img [src]="banner.image" class="w-full h-full object-cover" />
      </div>
    </ng-template>

    `
})

export class BlockBannersComponent {
  readonly banners = input<any>([]);

  constructor() { }

  getUrl(path: string) {
    return BaseUrlPipe.getUrl(path);
  }

  isDateValid(startDate: string, endDate: string): boolean {
    const today = new Date().toLocaleDateString('pt-BR');
    const de = startDate ? new Date(startDate.split('/').reverse().join('-')).toLocaleDateString('pt-BR') : null;
    const ate = endDate ? new Date(endDate.split('/').reverse().join('-')).toLocaleDateString('pt-BR') : null;

    return (!de || today >= de) && (!ate || today <= ate);
  }
}
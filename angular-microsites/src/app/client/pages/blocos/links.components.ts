import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BaseUrlPipe } from '../../../shared/pipes/baseUrl.pipe';
import { RouterLink } from '@angular/router';
import { IconeComponent } from '../../../shared/components/icone.component';

@Component({
  selector: 'bloco-links',
  imports: [CommonModule, BaseUrlPipe, RouterLink, IconeComponent],
  styles: [
    `
    :host {
      width: 100%;
    }
    `,
  ],
  template: `
    @if( links().length > 0 ) {
      <!-- sessao de links -->
      <section class="w-full flex flex-col items-center justify-start gap-4">
        @for(link of links(); track $index) {
          @if (link.href?.startsWith('http')) {
            <a [href]="[link.href | baseUrl]" target="_blank" class="w-full">
              <ng-container
                *ngTemplateOutlet="linksTemplate; context: { $implicit: link }"
              ></ng-container>
            </a>
          } @else {
            <a [routerLink]="[link.href | baseUrl]" class="w-full">
              <ng-container
                *ngTemplateOutlet="linksTemplate; context: { $implicit: link }"
              ></ng-container>
            </a>
          }
        }
      </section>
    }

    <ng-template #linksTemplate let-link>
      <div class="w-full flex flex-row items-center justify-start p-2 bg-white rounded-lg shadow-lg" >
        <div class="w-12 h-full flex items-start justify-start p-1 text-gray-700">
          <app-icone [icon]="link.icon"></app-icone>
        </div>
        <div class="w-full flex flex-col items-start justify-start">
          <h2 class="text-lg font-bold text-gray-700">{{ link.title }}</h2>
          <p class="text-xs text-gray-500">{{ link.describe }}</p>
        </div>
      </div>
    </ng-template>
    `
})

export class BlockLinksComponent {
  readonly links = input<any>([]);

  constructor() { }
}
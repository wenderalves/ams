import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, BookOpenText, UserRound, Building2, Heart } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, CommonModule],
  template: `
    <div class="flex flex-col w-full gap-12">
        <!-- sessao de links -->
        <section class="w-full flex flex-col items-center justify-start gap-4">
          @for(link of blocks.links; track $index) {
          <a [href]="link.href" class="w-full flex flex-row items-center justify-start p-2 bg-white rounded-lg shadow-lg">
            <div class="w-12 h-full flex items-start justify-start p-1 text-gray-700">
              <lucide-angular [img]="link.icon" class="w-full"></lucide-angular>
            </div>
            <div class="w-full flex flex-col items-start justify-start">
              <h2 class="text-lg font-bold text-gray-700">{{link.title}}</h2>
              <p class="text-xs text-gray-500">{{link.describe}}</p>
            </div>
          </a>
          }
        </section>

        <!-- sessao de banners -->
        <section class="w-full flex flex-col items-center justify-start gap-4">
          @for(banner of blocks.banners; track $index) {
            <a [href]="banner.href" [ngStyle]="{'background-image': 'linear-gradient(rgb(214 214 214 / 36%), rgb(234 234 234 / 90%)), url(' + banner.image + ')'}"
            class="relative overflow-hidden p-4  bg-cover bg-center bg-opacity-70 border-4 border-white rounded-lg shadow-lg flex items-start justify-end flex-col w-full min-h-[200px]">
              <h2 class="text-lg font-bold text-gray-700">{{banner.title}}</h2>
              <p class="text-xs text-gray-700">
                {{banner.describe}}
              </p>
              @if (banner.emBreve) {
                <div class="absolute flex items-center justify-center top-16 -right-22 w-full h-12 p-2 bg-zinc-800
                  font-bold uppercase text-white rotate-45">
                  EM BREVE
                </div>
              }
            </a>
          }
        </section>
    </div>
  `,
  styleUrl: './home.components.css'
})
export class HomeComponent {
  readonly Heart = Heart; // icone

  title = 'angular-microsites';

  readonly blocks = {
    links: [
      {
        title: 'Fale com a Portaria',
        describe: 'Clique aqui para falar com a portaria.',
        icon: Building2,
        href: 'https://wa.me/5543988657185'
      },
      {
        title: 'Fale com o síndico(a)',
        describe: 'Clique aqui para falar com o síndico(a).',
        icon: UserRound,
        href: 'https://wa.me/554398419137'
      },
      {
        title: 'Regimento Interno',
        describe: 'Clique aqui para ver o Regimento Interno.',
        icon: BookOpenText,
        href: '/regimento'
      },
      {
        title: 'Fale com a Administradora',
        describe: 'Clique aqui para falar com a Administradora do condomínio.',
        icon: Building2,
        href: 'https://planning.com21.com.br/fale-conosco'
      }
    ],
    banners: [
      {
        title: 'Arquivos de projeto',
        describe: 'Aqui você encontra os arquivos de projeto do condomínio.',
        image: '/images/projetos.png',
        emBreve: true,
        href: '/'
      },
      {
        title: 'Arquivos de projeto: Apartamentos',
        describe: 'Aqui você encontra os arquivos de projeto das unidades do condomínio.',
        image: '/images/projetos2.png',
        emBreve: true,
        href: '/'
      },
    ]
  };
}

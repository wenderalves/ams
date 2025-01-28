import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LucideAngularModule, BookOpenText, UserRound, Building2, Heart } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly Heart = Heart; // icone

  title = 'angular-microsites';

  readonly blocks = {
    links: [
        {
          title: 'Fale com a Portaria',
          describe: 'Clique aqui para falar com a portaria.',
          icon: Building2,
          href: 'https://www.google.com.br'
        },
        {
          title: 'Fale com o síndico(a)',
          describe: 'Clique aqui para falar com o síndico(a).',
          icon: UserRound,
          href: 'https://www.google.com.br'
        },
        {
          title: 'Regimento Interno',
          describe: 'Clique aqui para ver o Regimento Interno.',
          icon: BookOpenText,
          href: 'https://www.google.com.br'
        },
        {
          title: 'Fale com a Administradora',
          describe: 'Clique aqui para falar com a Administradora do condomínio.',
          icon: Building2,
          href: 'https://www.google.com.br'
        }
      ],
    banners: [
        {
          title: 'Arquivos de projeto',
          describe: 'Aqui você encontra os arquivos de projeto do condomínio.',
          image: '/images/projetos.png',
          href: 'https://drive.google.com'
        },
        {
          title: 'Arquivos de projeto: Apartamentos',
          describe: 'Aqui você encontra os arquivos de projeto das unidades do condomínio.',
          image: '/images/projetos2.png',
          href: 'https://drive.google.com'
        },
      ]
  };
}

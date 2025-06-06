import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'error-page',
  template: `
    <div class="flex flex-col justify-center items-center h-screen gap-3">
      <img src="/comulink.svg" alt="Comulink" class="w-32">

      @if (informativo) {
        <h1 class="text-2xl font-bold mb-4 text-gray-600">Permissões Requeridas</h1>
        <p class="text-gray-400 mb-8 text-center">
          Para acessar o sistema você precisa dar a <b>permissão de localização</b>. <br>
          Acesse as configurações do seu navegador e permita o acesso à localização.<br>
        </p>
        <button (click)="requestLocationAndRedirect()" class="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded">
          Tentar Novamente
        </button>
      } @else {
        <h1 class="text-2xl font-bold mb-4 text-gray-600">{{ titulo }}</h1>
        <p class="text-gray-400 mb-8">{{ message }}</p>
        <a [routerLink]="['../home']" class="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded">
          Voltar para a página inicial
        </a>
      }

    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ]
})

export class ErrorPageComponent {
  protected titulo: string = 'Oops! Algo deu errado.';
  protected message: string = 'Não foi possível carregar a página.';

  protected informativo: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private dataService: DataService) {
    const erro = this.activeRoute.snapshot.queryParams['error'];
    if (erro) {
      switch(erro) {
        case '401':
        case '403':
          this.titulo = 'Acesso negado';
          this.message = 'Você não tem permissão para acessar esta página.';
          break;

        case '404':
          this.titulo = 'Página não encontrada';
          this.message = 'A página que você está procurando não existe.';
          break;

        case '500':
          this.titulo = 'Erro interno do servidor';
          this.message = 'Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.';
          break;

        case 'localizacao':
          this.informativo = true;
          break;

        default:
          this.titulo = 'Oops! Algo deu errado.';
          this.message = 'Não foi possível carregar a página.';
          break;
      }
    }
  }

  requestLocationAndRedirect() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const data = this.dataService.getDataStorage();
        if (data) {
          this.router.navigate(['client', data?.domain, 'home']);
        }
      },
      error => {
        // Still no permission, stay on error page
        console.error('Permissão de localização negada:', error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );
  }
}
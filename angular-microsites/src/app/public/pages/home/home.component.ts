import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule, BookOpenText, UserRound, Building2, Heart } from 'lucide-angular';
import { config } from '../../config';
// import { BaseUrlPipe } from '../../pipes/baseUrl.pipe';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.components.css'
})
export class PublicHomeComponent {
  readonly contato = config.contato;

  readonly anoAtual = config.anoAtual;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((queryParams) => {
      const clientParam = queryParams.get('client');
      if (clientParam) {
        window.location.href = '/client/' + clientParam;
      }
    });
  }
}
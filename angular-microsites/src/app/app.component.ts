import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LucideAngularModule, BookOpenText, UserRound, Building2, Heart } from 'lucide-angular';
import { BaseUrlPipe } from './pipes/baseUrl.pipe';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule, CommonModule, RouterOutlet, BaseUrlPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly Heart = Heart; // icone

  title = 'Condominio TSC';

}

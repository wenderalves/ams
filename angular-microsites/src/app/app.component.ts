import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heart } from 'lucide-angular';
// import { BaseUrlPipe } from './pipes/baseUrl.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly Heart = Heart; // icone

  title = 'Condominio TSC';

}

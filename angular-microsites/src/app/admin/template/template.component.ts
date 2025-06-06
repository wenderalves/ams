import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LucideAngularModule, BookOpenText, UserRound, Building2, Heart } from 'lucide-angular';
// import { BaseUrlPipe } from '../../pipes/baseUrl.pipe';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule, CommonModule, RouterOutlet],

  template: `
  <main class="w-full min-h-screen flex flex-col items-center justify-start bg-gray-200 px-4">
      <div class="w-full flex flex-col items-center justify-start max-w-screen-md gap-4">
        HEADER
      </div>
      <router-outlet></router-outlet>
      <div class="w-full flex flex-col items-center justify-start max-w-screen-md h-10 mt-10">
        <p class="text-xs text-gray-500 flex items-center justify-center gap-1">
          Feito com <lucide-angular [img]="Heart" class="w-4 h-4 text-red-500"></lucide-angular> por <a
            href="mailto:wender_net@hotmail.com" class="hover:underline">comulink.com.br</a>
        </p>
      </div>
  </main>
  `
})
export class TemplateComponent {
  readonly Heart = Heart; // icone

}

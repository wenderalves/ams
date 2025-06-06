import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Heart, LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'footer',
  imports: [CommonModule, LucideAngularModule],
  template: `
      <div class="w-full flex flex-col items-center justify-start max-w-screen-md h-10 mt-10">
        <p class="text-xs text-gray-500 flex items-center justify-center gap-1">
          Feito com <lucide-angular [img]="Heart" class="w-4 h-4 text-red-500"></lucide-angular> por <a
            href="mailto:wender_net@hotmail.com" class="hover:underline">comulink.com.br</a>
        </p>
      </div>
  `,
})
export class FooterComponent {
    readonly Heart = Heart; // icone
  constructor() { }
}
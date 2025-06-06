import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Heart, LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'carregando',
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="flex flex-col items-center justify-center w-screen h-screen">
        <img src="/comulink.svg" alt="Comulink" class="w-32">
        <span class="blink">Carregando...</span>
    </div>
  `,
  styles: [`
    .blink {
      animation: blink 2s ease-in-out infinite;
    }
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.2; }
      100% { opacity: 1; }
    }
  `]
})
export class CarregandoComponent {
  constructor() { }
}
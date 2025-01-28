import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'acordion',
  imports: [CommonModule, LucideAngularModule],
  template: `
      <div class="flex flex-col w-full gap-4">
        <div class="w-full">
          <details class="group">
            <summary class="flex justify-between bg-white p-4 items-center font-medium cursor-pointer list-none text-gray-800">
              <div class="flex items-center gap-2">
                @if (icon) {
                  <lucide-angular [img]="icon" class="w-8"></lucide-angular>
                }
                <span class="flex-1">{{title}}</span>
              </div>
              <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
            </summary>
            <p class="pt-0 px-4 pb-4 bg-white text-neutral-600 group-open:animate-fadeIn" [innerHTML]="describe"></p>
          </details>
        </div>
      </div>
  `,
})
export class AcordionComponent {

  @Input({ required: true}) title!: string;
  @Input() describe: string = '';
  @Input() icon?: any;

  constructor() { }
}
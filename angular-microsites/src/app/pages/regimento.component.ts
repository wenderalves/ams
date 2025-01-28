import { Component } from "@angular/core";
import { AcordionComponent } from "../components/acordion.component";
import { Baby, Car, Dumbbell, PartyPopper, PawPrint, WavesLadder, FileText, LucideAngularModule, Hotel, Trash2, Drill, Package, Volleyball, Cctv, BadgePercent, SquareUser, Wallet } from "lucide-angular";
import { BaseUrlPipe } from "../pipes/baseUrl.pipe";

@Component({
  selector: 'regimento',
  imports: [AcordionComponent, LucideAngularModule, BaseUrlPipe],
  template: `
  <div class="flex flex-col items-center min-w-screen gap-4 p-4">
    <h2 class="text-md font-bold text-gray-800">
        REGIMENTO INTERNO
    </h2>
    <section class="w-full flex flex-col items-center justify-start gap-2">
      <a class="flex gap-2 text-center p-2 border-2 border-gray-500 text-gray-500"
      [href]="'/documentos/regimento.pdf' | baseUrl" target="_blank">
        <lucide-angular [img]="FileText" class="w-8"></lucide-angular>
        <span class="font-medium">Fazer Download do regimento.</span>
      </a>
    </section>
    <section class="w-full flex flex-col items-center justify-start gap-2">
      @for(regra of regras; track $index) {
        <acordion class="w-full"
          [icon]="regra.icon"
          [title]="regra.title"
          [describe]="regra.describe"
        ></acordion>
      }
    </section>
  </div>
  `,
})
export class RegimentoComponent {
  readonly FileText = FileText;
  constructor() {}

  regras = [
    {
      title: 'Disposições Gerais',
      icon: Hotel,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Lixo',
      icon: Trash2,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Reformas',
      icon: Drill,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Garagens',
      icon: Car,
      describe: `
        <ol class="list-decimal list-inside">
          <li>O condomínio não se responsabiliza por danos ou roubos.</li>
          <li>É proibido usar a garagem para consertos de veículos, exceto em emergências.</li>
          <li>É proibido estacionar na garagem de outro morador sem autorização.</li>
        </ol>
      `
    },
    {
      title: 'Mudanças',
      icon: Package,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Salão de Festas/Churrasqueira',
      icon: PartyPopper,
      describe: `
        <ol class="list-decimal list-inside">
          <li>Reservas devem ser feitas com antecedência.</li>
          <li>O salão deve ser entregue limpo e organizado após o uso.</li>
          <li>É proibido usar o salão para fins comerciais ou políticos.</li>
        </ol>
      `
    },
    {
      title: 'Piscina',
      icon: WavesLadder,
      describe: `
        <ol class="list-decimal list-inside">
          <li>Proibido nadar de roupa normal.</li>
          <li>Proibido pular ou fazer acrobacias.</li>
          <li>Proibido crianças menores de 12 anos permanecer sem o acompanhamento de um responsável maior.</li>
        </ol>
      `
    },
    {
      title: 'Playground',
      icon: Baby,
      describe: `
        <ol class="list-decimal list-inside">
          <li>Horário de uso: 8h às 22h.</li>
          <li>Idade máxima permitida: 11 anos.</li>
          <li>Crianças devem estar acompanhadas por um responsável.</li>
        </ol>
      `
    },
    {
      title: 'Academia ao Ar Livre',
      icon: Dumbbell,
      describe: `
        <ol class="list-decimal list-inside">
          <li>Horário de uso: 6h às 24h.</li>
          <li>Uso permitido apenas para maiores de 12 anos.</li>
          <li>Visitantes não podem usar a academia.</li>
        </ol>
      `
    },
    {
      title: 'Quadra',
      icon: Volleyball,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Espaço Pet',
      icon: PawPrint,
      describe: `
        <ol class="list-decimal list-inside">
          <li>Uso exclusivo para animais dos moradores.</li>
          <li>É proibido levar filhotes não vacinados.</li>
          <li>O dono deve recolher os excrementos do animal.</li>
        </ol>
      `
    },
    {
      title: 'Câmeras',
      icon: Cctv,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Taxas Condominiais',
      icon: BadgePercent,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Empregados/Terceiros',
      icon: SquareUser,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
    {
      title: 'Penalidades',
      icon: Wallet,
      describe: `
        <ol class="list-decimal list-inside">
          <li>....</li>
        </ol>
      `
    },
  ];

}
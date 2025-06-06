import { CommonModule } from "@angular/common";
import { Component, input, Input } from "@angular/core";
import { Baby, BadgePercent, BookOpenText, Building2, Car, Cctv, Drill, Dumbbell, FileText, Heart, HelpCircle, Hotel, House, LucideAngularModule, Package, PartyPopper, PawPrint, SquareUser, Trash2, UserRound, Volleyball, Wallet, WavesLadder, QrCode } from "lucide-angular";

@Component({
  selector: 'app-icone',
  imports: [CommonModule, LucideAngularModule],
  template: `
    @if (listaIcones[icon()]) {
      <lucide-angular [img]="listaIcones[icon()]" class="w-full"></lucide-angular>
    }
  `,
})
export class IconeComponent {

    readonly icon = input<any>('');

    listaIcones: any = {
      home: House,
      livro: BookOpenText,
      coracao: Heart,
      empresa: Building2,
      user: UserRound,
      hotel: Hotel,
      lixo : Trash2,
      obras : Drill,
      carro : Car,
      pacote : Package,
      festa : PartyPopper,
      piscina : WavesLadder,
      bebe : Baby,
      academia : Dumbbell,
      bola : Volleyball,
      pet : PawPrint,
      camera : Cctv,
      taxa : BadgePercent,
      user2 : SquareUser,
      carteira : Wallet,
      arquivoTexto: FileText,
      help: HelpCircle,
      qrcode: QrCode
    }

    constructor() { }
}
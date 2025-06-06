import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Heart } from 'lucide-angular';
import { BaseUrlPipe } from '../../shared/pipes/baseUrl.pipe';
import { FooterComponent } from '../../shared/components/footer.component';
import { DataService } from '../service/data.service';
import { CarregandoComponent } from '../../shared/components/loading.component';
import { GeoService } from '../service/geo.service';

@Component({
  selector: 'app-root',
  imports: [LucideAngularModule, CommonModule, RouterOutlet, BaseUrlPipe, FooterComponent, RouterLink, CarregandoComponent],
  providers: [DataService, GeoService],
  template: `
    @if (isDataReady()) {
      <main class="w-full min-h-screen flex flex-col items-center justify-start bg-gray-200 px-4">
        <div class="h-full items-start max-w-lg">
          <div class="w-full flex flex-col items-center justify-start max-w-screen-md gap-4">
            <div class="w-full flex flex-col items-center justify-start">
              <div class="w-full overflow-hidden flex items-center justify-center">
                <img [src]="dataPage?.banner | baseUrl" alt="banner" class="w-full">
              </div>
              <a [routerLink]="'../' | baseUrl"
                class="-mt-16 bg-gray-100 overflow-hidden border-6 border-white
                shadow-lg w-32 h-32 rounded-full p-3">
                <img [src]="dataPage?.logo | baseUrl" alt="Logo" class="w-full">
              </a>
              <h1 class="text-xl font-bold mb-4 align-center uppercase text-gray-700 mt-4">
                {{ dataPage?.name }}
              </h1>
            </div>
          </div>
          <router-outlet></router-outlet>
          <footer></footer>
        </div>
      </main>
    } @else {
      <carregando></carregando>
    }
  `
})
export class TemplateComponent {
  isDataReady = computed(() => Object.keys(this.dataClient.data()).length > 0);
  dataPage: any;
  currentCondo: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataClient: DataService,
    private geoService: GeoService,
    private router: Router
  ) {
    this.getData();
    effect(() => {
      if (Object.keys(this.dataClient.data()).length > 0) {
        this.dataPage = this.dataClient.data();
        /**
        if (this.dataPage.config['limitarGeolocalizacao']) {
          this.geoService.getCoordsBrowser().then((location: any) => {
            const permiteDistancia = this.geoService.isAllowedDistance(
              this.dataPage.config.raioPermitidoKm,
              this.dataPage.config.latitude,
              this.dataPage.config.longitude,
              location.lat,
              location.lng);
            if (!location || !permiteDistancia) {
              alert('Você está fora da área de cobertura do site.');
              this.router.navigate(['client', this.dataPage.domain ,'erro'], {
                queryParams: { error: '401' }
              });
              return;
            };
          })
          .catch(error => {
            this.router.navigate(['client', this.dataPage.domain ,'erro'], {
              queryParams: { error: 'localizacao' }
            });
          });
        }
        */
      }
    });

    this.route.parent?.params.subscribe(params => {
      if (this.currentCondo && this.currentCondo !== params['client']) {
        location.reload();
      }
    });
  }

  getData() {
    this.currentCondo = this.route.snapshot.params['client'];
    this.dataClient.getData(this.currentCondo).subscribe();
  }
}
function whithFetch(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
  throw new Error('Function not implemented.');
}

import { Component, computed, effect } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { AcordionComponent } from "../../shared/components/acordion.component";
import { BaseUrlPipe } from "../../shared/pipes/baseUrl.pipe";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DataService } from "../service/data.service";
import { CommonModule } from "@angular/common";
import { CarregandoComponent } from "../../shared/components/loading.component";
import { IconeComponent } from "../../shared/components/icone.component";
import { BlockLinksComponent } from "./blocos/links.components";
import { BlockBannersComponent } from "./blocos/banners.components";
import { GeoService } from "../service/geo.service";

@Component({
  imports: [
    CommonModule,
    AcordionComponent,
    LucideAngularModule,
    BaseUrlPipe,
    RouterLink,
    CarregandoComponent,
    IconeComponent,
    BlockLinksComponent,
    BlockBannersComponent
  ],
  templateUrl: "./page.component.html",
})
export class PageComponent  {
  isDataReady = computed(() => Object.keys(this.dataClient.data()).length > 0);
  dataPage: any;
  currentSlug: string = '';

  constructor(private route: ActivatedRoute, private dataClient: DataService, private geo: GeoService) {
    effect(() => {
      if (Object.keys(this.dataClient.data()).length > 0) {
        this.currentSlug = this.route.parent?.snapshot.params['slug'];
        const data: any = this.dataClient.data();
        this.dataPage = data?.pages[this.currentSlug];

        if (data.config['limitarGeolocalizacao']) {
          this.geo.getCoordsBrowser().then((location: any) => {
            if (!location &&
              !this.geo.isAllowedDistance(
                data.config.raioPermitidoKm,
                data.config.latitude,
                data.config.longitude,
                this.dataPage.latitude,
                this.dataPage.longitude)
            ) {
              alert('Você está fora da área de cobertura do site.');
            };
          });
        }

      }
    });

    this.route.parent?.params.subscribe(params => {
      if (this.currentSlug && this.currentSlug !== params['slug']) {
        location.reload();
      }
    });
  }

  isInternalLink(url: string): boolean {
    return /^(\/|\.\/|\.\.\/)/g.test(url);
  }

  getUrl(path: string) {
    return BaseUrlPipe.getUrl(path);
  }

}
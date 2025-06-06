import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeoService {
  private distanciaPermitidaKm = 1;

  constructor() { }

  getCoordsBrowser() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000
        }
      );
    });
  }

  isAllowedDistance(
    raioPermitidoKm: number = this.distanciaPermitidaKm,
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) {
    const R = 6371; // Raio da Terra em quilômetros
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance <= raioPermitidoKm;
  }

  private deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }
}
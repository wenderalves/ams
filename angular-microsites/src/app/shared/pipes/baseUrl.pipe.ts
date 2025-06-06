import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baseUrl',
  standalone: true
})
export class BaseUrlPipe implements PipeTransform {
  static getUrl(value: string) {
    if (value.startsWith('/')) {
      if (window.location.hostname === 'localhost') {
        return value;
      }
      return `/${value.replace(/^\//, '')}`;
    }

    return value;
  }

  transform(value: string): string {
    // verifica se está em modo dev
    if (window.location.hostname === 'localhost') {
      return value;
    }
    return BaseUrlPipe.getUrl(value);
  }

}
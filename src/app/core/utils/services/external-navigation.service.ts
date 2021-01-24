import { Injectable } from '@angular/core';

@Injectable()
export class ExternalNavigationService {
  
  public navigateToUrl(url: string): void {
    window.location.href = url;
  }

}

import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExternalNavigationService } from '../services/external-navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private externalNavigationServer: ExternalNavigationService) { }

  public goToGitHub(): void {
    const url: string = environment.homeTrackerCVS;
    this.externalNavigationServer.navigateToUrl(url);
  }

}

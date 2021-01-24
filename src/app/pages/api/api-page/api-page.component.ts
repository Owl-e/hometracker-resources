import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModulesService } from 'src/app/core/modules/services/modules.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit, OnDestroy {

  versions: string[] = [];

  private modulesServiceSubscribtion: Subscription;

  constructor(private modulesService: ModulesService) { }

  public ngOnInit(): void {
    this.modulesServiceSubscribtion = this.modulesService.getModule('hometracker-api')
      .subscribe(module => this.versions = module.versions);
  }

  public ngOnDestroy(): void {
    this.modulesServiceSubscribtion.unsubscribe();
  }


}

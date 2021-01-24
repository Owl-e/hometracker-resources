import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { ExternalNavigationService } from './services/external-navigation.service';
import { NavTabComponent } from './nav-bar/nav-tab/nav-tab.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, NavTabComponent],
  providers: [ExternalNavigationService],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [NavBarComponent]
})
export class UtilsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRoutingModule } from './api-routing.module';
import { ApiPageComponent } from './api-page/api-page.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ModulesModule } from '../modules/modules.module';


@NgModule({
  declarations: [ApiPageComponent],
  imports: [
    CommonModule,
    ApiRoutingModule,
    MaterialModule,
    ModulesModule
  ]
})
export class ApiModule { }

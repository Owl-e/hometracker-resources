import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPageComponent } from './modules-page/modules-page.component';
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [ModulesPageComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }

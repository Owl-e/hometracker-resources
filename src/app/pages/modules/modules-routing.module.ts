import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModulesPageComponent } from "./modules-page/modules-page.component";

const routes: Routes = [
    { path: '', component: ModulesPageComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ModulesRoutingModule { }
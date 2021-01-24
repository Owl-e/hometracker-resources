import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApiPageComponent } from "./api-page/api-page.component";

const routes: Routes = [
    { path: '', component: ApiPageComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ApiRoutingModule { }
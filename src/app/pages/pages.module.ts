import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'api', loadChildren: () => import('./api/api.module').then(m => m.ApiModule), data: { animation: 'Api' } },
  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule), data: { animation: 'Modules' } },
  { path: '', redirectTo: 'api', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesModule { }

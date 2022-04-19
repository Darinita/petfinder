import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptaGatosComponent } from './adopta-gatos/adopta-gatos.component';
import { AdoptaPerrosComponent } from './adopta-perros/adopta-perros.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'adopta-gatos',
    component: AdoptaGatosComponent
  },
  {
    path: 'adopta-perros',
    component: AdoptaPerrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

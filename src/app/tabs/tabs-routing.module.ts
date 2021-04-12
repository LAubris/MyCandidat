import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inscription',
        loadChildren: () => import('../inscription/inscription.module').then(m => m.InscriptionPageModule)
      },
      {
        path: 'enseignant',
        loadChildren: () => import('../enseignant/enseignant.module').then(m => m.EnseignantPageModule)
      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'rgpd',
        loadChildren: () => import('../rgpd/rgpd.module').then(m => m.RgpdPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//route permettant la navigation entre les pages lors du changement de page mettre le nom de la route comme en symfony
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'enseignant',
    loadChildren: () => import('./enseignant/enseignant.module').then( m => m.EnseignantPageModule)
  },
  {
    path: 'rgpd',
    loadChildren: () => import('./rgpd/rgpd.module').then( m => m.RgpdPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./statistique/statistique.module').then( m => m.StatistiquePageModule)
  },

 


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

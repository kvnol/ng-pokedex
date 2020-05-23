import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/signed/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'pages/sign/signup', loadChildren: () => import('./pages/sign/signin/signin.module').then(m => m.SigninModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PartialLayoutComponent } from './layout/partial-layout/partial-layout.component';

import { PARTIAL_ROUTES } from './shared/routes/partial-layout.routes';


/**
 * @author - anandkumar189
 * Define routes ,
 * Full Layout contains inside pages after login pages
 * Partial Layout contains Outside pages before login
 */
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PartialLayoutComponent,
    data: {
      title: 'partial Views'
    },
    children: PARTIAL_ROUTES,
  },
  {
    path: '',
    loadChildren: () => import('./layout/full-layout/full-layout.module').then(m => m.FullLayoutModule)
    // ,canActivate: [AuthGuard]
  }
  // {
  //   // path: '**',
  //   // component: ErrorComponent,
  //   // data: {
  //   //   title: 'Error'
  //   // }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

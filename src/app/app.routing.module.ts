import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGaurd } from './page-not-found/can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
const appRoute: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id', component: UserComponent },
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
  { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoute, {useHash: true}),
    RouterModule.forRoot(appRoute)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes=[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }
  //,
  // {
  //   path: 'login',
  //   loadChildren: 'app/login/login.module#LoginModule'
  // }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{

}
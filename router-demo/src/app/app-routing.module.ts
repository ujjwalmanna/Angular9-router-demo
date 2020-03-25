import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';
import { HomeObserComponent } from './home-obser/home-obser.component';
import { UserObserComponent } from './user-obser/user-obser.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent}
  ]},
  
  {path:'servers',
    //canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    component:ServersComponent,children:[
    {path:':id',component:ServerComponent,resolve:{server:ServerResolverService}},
    {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
  ]},
  {path: 'observerdemo', component: HomeObserComponent},
  {path: 'observerdemo/user/:id', component: UserObserComponent},
 
  //{path:'not-found',component:PageNotFoundComponent},
  {path:'not-found',component:ErrorPageComponent,data:{message:'Page not found!'}},
  {path:'**',redirectTo:'not-found'}

  
];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{useHash:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

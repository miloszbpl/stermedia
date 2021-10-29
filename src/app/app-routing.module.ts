import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UsersListComponent } from './components/users-list/users-list.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: "users",
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/:id',
    component: UserOverviewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}

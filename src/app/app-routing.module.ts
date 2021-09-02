import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user.component';
import { ClientComponent } from './clients/client.component'

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UserComponent },
  { path: 'clients', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

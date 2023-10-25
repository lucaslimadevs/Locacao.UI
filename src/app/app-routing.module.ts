import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registro', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent , canActivate: [AuthGuardService], children: [
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'cadastro-cliente', component: Cadas },
    { path: '**', component: DashboardComponent }  
    // { path: 'shortcuts', component: ShortcutsComponent },
    // { path: 'overview', component: OverviewComponent },
    // { path: 'events', component: EventsComponent },
    // { path: 'profile', component: ProfileComponent },
    // { path: 'status', component: StatusComponent },
  ]},

  { path: '**', component: PageNotFoundComponent , canActivate: [AuthGuardService]}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

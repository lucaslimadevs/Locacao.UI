import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { ConsultaClienteComponent } from './pages/cliente/cadastro-cliente/consulta-cliente/consulta-cliente.component';
import { ConsultaEquipamentoComponent } from './pages/consulta-equipamento/consulta-equipamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    PageNotFoundComponent,
    MenuComponent,
    DashboardComponent,
    CadastroClienteComponent,
    ConsultaClienteComponent,
    ConsultaEquipamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuralDeVagasComponent } from './mural-de-vagas/mural-de-vagas.component';
import { RouterModule } from '@angular/router';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { MenuVagasComponent } from './menu-vagas/menu-vagas.component';
import { RodapeVagasComponent } from './rodape-vagas/rodape-vagas.component';
import { VagasPcdComponent } from './components/vagas-pcd/vagas-pcd.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralDeVagasComponent,
    PainelVagasComponent,
    MenuVagasComponent,
    RodapeVagasComponent,
    VagasPcdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

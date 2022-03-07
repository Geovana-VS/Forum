import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { MenuVagasComponent } from './components/menu-vagas/menu-vagas.component';
import { RodapeVagasComponent } from './components/rodape-vagas/rodape-vagas.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MuralVagaspcdComponent } from './components/mural-vagaspcd/mural-vagaspcd.component';
import { MuralDeVagasComponent } from './components/mural-de-vagas/mural-de-vagas.component';
import { MuralVagastecComponent } from './components/mural-vagastec/mural-vagastec.component';
import { MuralVagasmedComponent } from './components/mural-vagasmed/mural-vagasmed.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuVagasComponent,
    RodapeVagasComponent,
    MuralVagaspcdComponent,
    MuralDeVagasComponent,
    MuralVagastecComponent,
    MuralVagasmedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

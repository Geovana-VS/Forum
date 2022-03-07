import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { MuralDeVagasComponent } from '../components/mural-de-vagas/mural-de-vagas.component';
import { MuralVagastecComponent } from '../components/mural-vagastec/mural-vagastec.component';
import { MuralVagasmedComponent } from '../components/mural-vagasmed/mural-vagasmed.component';
import { MuralVagaspcdComponent } from '../components/mural-vagaspcd/mural-vagaspcd.component';

const rotas : Routes = [
  {path:'vagas-pcd',component:MuralVagaspcdComponent},
  {path:'home',component:MuralDeVagasComponent},
  {path:'mural-vagastec',component:MuralVagastecComponent},
  {path:'mural-vagasmed',component:MuralVagasmedComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports:[RouterModule]

})
export class AppRoutingModule { }

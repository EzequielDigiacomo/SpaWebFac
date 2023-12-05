import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtletasComponent } from './atletas/atletas.component';
import { DetalleAtletaComponent } from './atletas/detalle-atleta/detalle-atleta.component';
import { MadresComponent } from './madres/madres.component';
import { PadresComponent } from './padres/padres.component';
import { TutoresComponent } from './tutores/tutores.component';

const routes: Routes = [
{path: '', component : HomeComponent},
{path: 'atletas', component : AtletasComponent},
{path: 'atletas/:atletaId', component : DetalleAtletaComponent},
{path: 'madres', component : MadresComponent},
{path: 'padres', component : PadresComponent},
{path: 'tutores', component : TutoresComponent},
// {path: 'staff'},
{path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

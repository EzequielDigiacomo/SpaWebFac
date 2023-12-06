import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtletasComponent } from './atletas/atletas.component';
import { DetalleAtletaComponent } from './atletas/detalle-atleta/detalle-atleta.component';
import { MadresComponent } from './madres/madres.component';
import { PadresComponent } from './padres/padres.component';
import { TutoresComponent } from './tutores/tutores.component';
import { CrearAtletaComponent } from './atletas/crear-atleta/crear-atleta.component';
import { CrearMadreComponent } from './madres/crear-madre/crear-madre.component';

const routes: Routes = [
{path: '', component : HomeComponent},
{path: 'atletas', component : AtletasComponent},
{path: 'atletas/:atletaId', component : DetalleAtletaComponent},
{path: 'crear-atleta', component: CrearAtletaComponent},
{path: 'madres', component : MadresComponent},
{path: 'crear-madre', component: CrearMadreComponent},
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

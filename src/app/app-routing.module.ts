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
import { DetalleMadreComponent } from './madres/detalle-madre/detalle-madre.component';
import { DetallePadreComponent } from './padres/detalle-padre/detalle-padre.component';
import { CrearPadreComponent } from './padres/crear-padre/crear-padre.component';
import { DetalleTutorComponent } from './tutores/detalle-tutor/detalle-tutor.component';
import { CrearTutorComponent } from './tutores/crear-tutor/crear-tutor.component';
import { EditarTutorComponent } from './tutores/editar-tutor/editar-tutor.component';

const routes: Routes = [
  //--------------HOME-----------------
{path: '', component : HomeComponent},
//--------------ATLETA-----------------
{path: 'atletas', component : AtletasComponent},
{path: 'atletas/:atletaId', component : DetalleAtletaComponent},
{path: 'crear-atleta', component: CrearAtletaComponent},
//--------------MADRES-----------------
{path: 'madres', component : MadresComponent},
{path: 'madres/:madreId', component : DetalleMadreComponent},
{path: 'crear-madre', component: CrearMadreComponent},
//--------------PADRES-----------------
{path: 'padres', component : PadresComponent},
{path: 'padres/:padreId', component : DetallePadreComponent},
{path: 'crear-padre', component: CrearPadreComponent},

//--------------TUTORES-----------------
{path: 'tutores', component : TutoresComponent},
{path: 'tutores/:tutoresId', component : DetalleTutorComponent},
{path: 'crear-tutor', component: CrearTutorComponent},
{path: 'editar-tutor/:id', component: EditarTutorComponent},
{path: '**', redirectTo: '', pathMatch: 'full'}

//--------------HOME-----------------
// {path: 'staff'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

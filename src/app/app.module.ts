import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AtletasComponent } from './atletas/atletas.component';
import { MadresComponent } from './madres/madres.component';
import { PadresComponent } from './padres/padres.component';
import { TutoresComponent } from './tutores/tutores.component';
import { DetalleAtletaComponent } from './atletas/detalle-atleta/detalle-atleta.component';
import { CrearAtletaComponent } from './atletas/crear-atleta/crear-atleta.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearMadreComponent } from './madres/crear-madre/crear-madre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleMadreComponent } from './madres/detalle-madre/detalle-madre.component';
import { DetallePadreComponent } from './padres/detalle-padre/detalle-padre.component';
import { CrearPadreComponent } from './padres/crear-padre/crear-padre.component';
import { CrearTutorComponent } from './tutores/crear-tutor/crear-tutor.component';
import { DetalleTutorComponent } from './tutores/detalle-tutor/detalle-tutor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtletasComponent,
    MadresComponent,
    PadresComponent,
    TutoresComponent,
    DetalleAtletaComponent,
    CrearAtletaComponent,
    CrearMadreComponent,
    DetalleMadreComponent,
    DetallePadreComponent,
    CrearPadreComponent,
    CrearTutorComponent,
    DetalleTutorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

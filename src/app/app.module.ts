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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtletasComponent,
    MadresComponent,
    PadresComponent,
    TutoresComponent,
    DetalleAtletaComponent,
    CrearAtletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

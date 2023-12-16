
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAtleta } from 'src/app/models/atleta.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-crear-atleta',
  templateUrl: './crear-atleta.component.html',
  styleUrls: ['./crear-atleta.component.css']
})
export class CrearAtletaComponent {

  form : FormGroup ;

  constructor(private formBuilder: FormBuilder ,private _apiServices: ApiServicesService) {
    this.form = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      nacionalidad: [''],
      dni: [''],
      numeroDePasaporte: [''],
      direccion: [''],
      emailDelAtleta: [''],
      fechaDeNacimientoDelAtleta: [''],
      celularDelAtleta: [''],
      club: [''],
      obraSocial: [''],
      numeroCarnetObraSocial: [''],
      permisoDeViaje: [''],
      beca: [''],
      fotoDniFrontal: [''],
      fotoDniDorsal: [''],
      fotoPasaporteFrontal: [''],
      fotoPasaporteDorsal: [''],
      madreAtletaId: ['', ],
      padreAtletaId: ['', ],
      tutorAtletaId: ['', ],

    })
  }

  public enviarPostAtleta(){
    this._apiServices.postAtleta('http://www.spawebfac.somee.com/api/atleta', 
    {
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      nacionalidad:this.form.value.nacionalidad,
      dni: this.form.value.dni,
      numeroDePasaporte:this.form.value.numeroDePasaporte,
      direccion: this.form.value.direccion,
      emailDelAtleta: this.form.value.emailDelAtleta,
      fechaDeNacimientoDelAtleta: this.form.value.fechaDeNacimientoDelAtleta,
      celularDelAtleta: this.form.value.celularDelAtleta,
      club:this.form.value.club,
      obraSocial: this.form.value.obraSocial,
      numeroCarnetObraSocial: this.form.value.numeroCarnetObraSocial,
      permisoDeViaje: this.form.value.permisoDeViaje,
      beca: this.form.value.beca,
      fotoDniFrontal: this.form.value.fotoDniFrontal,
      fotoDniDorsal: this.form.value.fotoDniDorsal,
      fotoPasaporteFrontal: this.form.value.fotoPasaporteFrontal,
      fotoPasaporteDorsal: this.form.value.fotoPasaporteDorsal,
      madreAtletaId: this.form.value.madreAtletaId,
      padreAtletaId: this.form.value.padreAtletaId,
      tutorAtletaId: this.form.value.tutorAtletaId,

  }
    ).subscribe(respuesta => console.log('enviado'))
      
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IMadre } from 'src/app/models/madre.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-crear-madre',
  templateUrl: './crear-madre.component.html',
  styleUrls: ['./crear-madre.component.css']
})
export class CrearMadreComponent{

  form : FormGroup ;
  
  constructor(private formBuilder: FormBuilder ,private _apiServices: ApiServicesService, private _router: Router) {
    this.form = this.formBuilder.group({
      nombreMadre: [''],
      apellidoMadre: [''],
      dniMadre: [''],
      celularDeLaMadre: [''],
      emailDeLaMadre: [''],
      direccionDeLaMadre: [''],
      fotoDniFrontalMadre: [''],
      fotoDniDorsalMadre: [''],
      idAtleta: ['', ],

    })
  }

  public enviarPostMadre(){
    this._apiServices.postMadre('http://www.spawebfac.somee.com/api/madreatleta', 
    {
      nombreMadre: this.form.value.nombreMadre,
      apellidoMadre:this.form.value.apellidoMadre,
      dniMadre: this.form.value.dniMadre,
      celularDeLaMadre: this.form.value.celularDeLaMadre,
      emailDeLaMadre: this.form.value.emailDeLaMadre,
      direccionDeLaMadre: this.form.value.direccionDeLaMadre,
      fotoDniFrontalMadre: this.form.value.fotoDniFrontalMadre,
      fotoDniDorsalMadre: this.form.value.fotoDniDorsalMadre,
      idAtleta: this.form.value.idAtleta,
  

  }
    ).subscribe(respuesta => console.log('enviado'))
      
    this._router.navigate(['/madres'])
  }


}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-crear-padre',
  templateUrl: './crear-padre.component.html',
  styleUrls: ['./crear-padre.component.css']
})
export class CrearPadreComponent {

  formPadres : FormGroup ;
  
  constructor(private formBuilder: FormBuilder ,private _apiServices: ApiServicesService, private _router: Router) {
    this.formPadres = this.formBuilder.group({
      nombrePadre: [''],
      apellidoPadre: [''],
      dniPadre: [''],
      celularDelPadre: [''],
      emailDelPadre: [''],
      direccionDelPadre: [''],
      fotoDniFrontalPadre: [''],
      fotoDniDorsalPadre: [''],
      idAtleta: ['', ],

    })
  }

  public enviarPostPadre(){
    this._apiServices.postPadre('http://www.spawebfac.somee.com/api/padreatleta', 
    {
      nombrePadre: this.formPadres.value.nombrePadre,
      apellidoPadre:this.formPadres.value.apellidoPadre,
      dniPadre: this.formPadres.value.dniPadre,
      celularDelPadre: this.formPadres.value.celularDelPadre,
      emailDelPadre: this.formPadres.value.emailDelPadre,
      direccionDelPadre: this.formPadres.value.direccionDelPadre,
      fotoDniFrontalPadre: this.formPadres.value.fotoDniFrontalPadre,
      fotoDniDorsalPadre: this.formPadres.value.fotoDniDorsalPadre,
      idAtleta: this.formPadres.value.idAtleta,
    }

    ).subscribe(respuesta => console.log('enviado'))
      
    this._router.navigate(['/padres'])
  }

}

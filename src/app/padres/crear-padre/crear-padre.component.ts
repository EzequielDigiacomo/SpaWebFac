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
  form : FormGroup ;
  
  constructor(private formBuilder: FormBuilder ,private _apiServices: ApiServicesService, private _router: Router) {
    this.form = this.formBuilder.group({
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

  public enviarPostMPadre(){
    this._apiServices.postMadre('https://localhost:7258/api/padreatleta', 
    {
      nombrePadre: this.form.value.nombrePadre,
      apellidoPadre:this.form.value.apellidoPadre,
      dniMaPadre: this.form.value.dniPadre,
      celularDelPadre: this.form.value.celularDelPadre,
      emailDelPadre: this.form.value.emailDelPadre,
      direccionDelPadre: this.form.value.direccionDelPadre,
      fotoDniFrontalPadre: this.form.value.fotoDniFrontalPadre,
      fotoDniDorsalPadre: this.form.value.fotoDniDorsalPadre,
      idAtleta: this.form.value.idAtleta,
  

  }
    ).subscribe(respuesta => console.log('enviado'))
      
    this._router.navigate(['/'])
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-crear-tutor',
  templateUrl: './crear-tutor.component.html',
  styleUrls: ['./crear-tutor.component.css']
})
export class CrearTutorComponent {

  form : FormGroup ;
  
  constructor(private formBuilder: FormBuilder ,private _apiServices: ApiServicesService, private _router: Router) {
    this.form = this.formBuilder.group({
      nombreTutor: [''],
      apellidoTutor: [''],
      dniTutor: [''],
      celularDelTutor: [''],
      emailDelTutor: [''],
      direccionDelTutor: [''],
      fotoDniFrontalTutor: [''],
      fotoDniDorsalTutor: [''],
      idAtleta: ['', ],

    })
  }

  public enviarPostTutor(){
    this._apiServices.postTutor('http://www.spawebfac.somee.com/api/tutoratleta', 
    {
      nombreTutor: this.form.value.nombreTutor,
      apellidoTutor:this.form.value.apellidoTutor,
      dniTutor: this.form.value.dniTutor,
      celularDelTutor: this.form.value.celularDelTutor,
      emailDelTutor: this.form.value.emailDelTutor,
      direccionDelTutor: this.form.value.direccionDelTutor,
      fotoDniFrontalTutor: this.form.value.fotoDniFrontalTutor,
      fotoDniDorsalTutor: this.form.value.fotoDniDorsalTutor,
      idAtleta: this.form.value.idAtleta,
  
  }
    ).subscribe(respuesta => console.log('enviado'))
      
    this._router.navigate(['/tutores'])
  }

}

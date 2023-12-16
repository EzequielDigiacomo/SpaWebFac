import { Component, IterableDiffers, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ITutor } from 'src/app/models/tutor.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-editar-tutor',
  templateUrl: './editar-tutor.component.html',
  styleUrls: ['./editar-tutor.component.css']
})
export class EditarTutorComponent implements OnInit {

  tutor?: ITutor;
  tutoresList? : ITutor[];

  constructor(private _router:Router, private _apiSerivces : ApiServicesService, private activeRouter: ActivatedRoute){}

  datosTutor? : ITutor;
  editarForm = new FormGroup({

    nombreTutor : new FormControl(),
    apellidoTutor : new FormControl(''),
    dniTutor : new FormControl(''),
    celularDelTutor : new FormControl(''),
    emailDelTutor : new FormControl(''),
    direccionDelTutor : new FormControl(''),
    fotoDniFrontalTutor : new FormControl(''),
    fotoDniDorsalTutor : new FormControl(''),
    idAtleta : new FormControl(''),
    
  })


  ngOnInit(): void {

    let id = this.activeRouter.snapshot.paramMap.get('id');
    // console.log(id)

    this.activeRouter.params.subscribe ({
      next :(params :Params) => {
      this._apiSerivces.getTutorById(Number (params['id'])).subscribe({
        next : (data : ITutor) => {
          this.tutor = data;
          console.log(this.tutor)
          this.editarForm.setValue({
            'nombreTutor' : this.tutor?.nombreTutor,
            'apellidoTutor': this.tutor?.apellidoTutor,
            'dniTutor': this.tutor?.dniTutor,
            'celularDelTutor': this.tutor?.celularDelTutor,
            'emailDelTutor': this.tutor?.emailDelTutor,
            'direccionDelTutor': this.tutor?.direccionDelTutor,
            'fotoDniFrontalTutor': this.tutor?.fotoDniFrontalTutor,
            'fotoDniDorsalTutor': this.tutor?.fotoDniDorsalTutor,
            'idAtleta': this.tutor?.idAtleta
          })

          console.log(this.editarForm.value)
        }})
      }
    })
  
  }
    
    guardarTutor(form : ITutor){
    this._apiSerivces.editarTutor(form).subscribe(data => {
      console.log(data)
    })
     console.log()
    }
   
  }
  

    // public editarTutor(){
    //   this._apiSerivces.editarTutor('https://localhost:7258/api/tutoratleta', 
    //   {
    //     nombreTutor: this.editarForm.value.nombreTutor,
    //     apellidoTutor:this.editarForm.value.apellidoTutor,
    //     dniTutor: this.editarForm.value.dniTutor,
    //     celularDelTutor: this.editarForm.value.celularDelTutor,
    //     emailDelTutor: this.editarForm.value.emailDelTutor,
    //     direccionDelTutor: this.editarForm.value.direccionDelTutor,
    //     fotoDniFrontalTutor: this.editarForm.value.fotoDniFrontalTutor,
    //     fotoDniDorsalTutor: this.editarForm.value.fotoDniDorsalTutor,
    //     idAtleta: this.editarForm.value.idAtleta,
      
  
    //   }
    //     ).subscribe(respuesta => console.log('enviado'))
          
    //     this._router.navigate(['/tutores'])
    // }
  




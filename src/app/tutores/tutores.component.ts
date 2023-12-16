import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { ITutor } from '../models/tutor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent {

  tutor?: ITutor[];

  tutoresList : ITutor[] = [];

  constructor(private _apiServices : ApiServicesService, private _router: Router){}

  ngOnInit(): void {
    this._apiServices.getAllTutores().subscribe((data : ITutor[]) => {
      console.log(data)
      this.tutoresList = data
    })
  }

   //-------Eliminar registro Tutor de api
   deleteTutor(tutor: ITutor){
    this._apiServices.deleteTutor(tutor.id).subscribe(
      res=>this._apiServices.getAllTutores().subscribe(
        response=>this.tutoresList =response
      )
    )
  }

  editarTutor(id : number){
    this._router.navigate(['editar-tutor', id])
  }

}

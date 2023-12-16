import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITutor } from 'src/app/models/tutor.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-detalle-tutor',
  templateUrl: './detalle-tutor.component.html',
  styleUrls: ['./detalle-tutor.component.css']
})
export class DetalleTutorComponent implements OnInit {

  tutor?:  ITutor;
 
constructor(private _route: ActivatedRoute, private _apiSerivces : ApiServicesService) {}

ngOnInit(): void {
  this._route.params.subscribe ({
    next :(params :Params) => {
    this._apiSerivces.getTutorById(Number (params['tutoresId'])).subscribe({
      next : (data : ITutor) => {
        this.tutor = data
      },
      error: (error: any) =>{
        console.log(error)
      }
    })
       },
       error:(error: any) =>{
        console.log(error)
      }
    })

  }
}

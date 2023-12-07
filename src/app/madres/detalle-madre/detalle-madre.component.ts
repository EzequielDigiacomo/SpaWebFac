import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMadre } from 'src/app/models/madre.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-detalle-madre',
  templateUrl: './detalle-madre.component.html',
  styleUrls: ['./detalle-madre.component.css']
})
export class DetalleMadreComponent implements OnInit  {

  madre?:  IMadre;
 
constructor(private _route: ActivatedRoute, private _apiSerivces : ApiServicesService) {}

ngOnInit(): void {
  this._route.params.subscribe ({
    next :(params :Params) => {
    this._apiSerivces.getMadreById(Number (params['madreId'])).subscribe({
      next : (data : IMadre) => {
        this.madre = data
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
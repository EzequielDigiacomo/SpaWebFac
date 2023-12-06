import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IAtleta } from 'src/app/models/atleta.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-detalle-atleta',
  templateUrl: './detalle-atleta.component.html',
  styleUrls: ['./detalle-atleta.component.css']
})
export class DetalleAtletaComponent implements OnInit {

  atlet?:  IAtleta;
 


constructor(private _route: ActivatedRoute, private _apiSerivces : ApiServicesService) {}

ngOnInit(): void {
  this._route.params.subscribe ({
    next :(params :Params) => {
    this._apiSerivces.getAtletById(Number (params['atletaId'])).subscribe({
      next : (data : IAtleta) => {
        this.atlet = data
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


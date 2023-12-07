import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPadre } from 'src/app/models/padre.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-detalle-padre',
  templateUrl: './detalle-padre.component.html',
  styleUrls: ['./detalle-padre.component.css']
})
export class DetallePadreComponent implements OnInit{

  padre?:  IPadre;
 
  constructor(private _route: ActivatedRoute, private _apiSerivces : ApiServicesService) {}
  
  ngOnInit(): void {
    this._route.params.subscribe ({
      next :(params :Params) => {
      this._apiSerivces.getPadreById(Number (params['padreId'])).subscribe({
        next : (data : IPadre) => {
          this.padre = data
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

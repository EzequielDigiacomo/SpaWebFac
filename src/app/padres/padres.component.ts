import { Component } from '@angular/core';
import { IPadre } from '../models/padre.model';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.css']
})
export class PadresComponent {

  padresList : IPadre[] = [];

  constructor(private _apiServices : ApiServicesService){}

  ngOnInit(): void {
    this._apiServices.getAllPadres().subscribe((data : IPadre[]) => {
      console.log(data)
      this.padresList = data
    })
  }

  //-------Eliminar registro Padre de api
  deletePadre(padre: IPadre){
    this._apiServices.deletePadre(padre.id).subscribe(
      res=>this._apiServices.getAllPadres().subscribe(
        response=>this.padresList =response
      )
    )
  }
}

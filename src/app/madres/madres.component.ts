import { Component } from '@angular/core';
import { IMadre } from '../models/madre.model';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-madres',
  templateUrl: './madres.component.html',
  styleUrls: ['./madres.component.css']
})
export class MadresComponent {

  madresList : IMadre[] = [];

  constructor(private _apiServices : ApiServicesService){}

  ngOnInit(): void {
    this._apiServices.getAllMadres().subscribe((data : IMadre[]) => {
      console.log(data)
      this.madresList = data
    })
  }

   //-------Eliminar registro Madre de api
   deleteMadre(madre: IMadre){
    this._apiServices.deleteMadre(madre.id).subscribe(
      res=>this._apiServices.getAllMadres().subscribe(
        response=>this.madresList =response
      )
    )
  }
    
}

import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { IAtleta } from '../models/atleta.model';
import { IPadre } from '../models/padre.model';
import { IMadre } from '../models/madre.model';
import { ITutor } from '../models/tutor.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  atletsList : IAtleta[] = [];
  padresList: IPadre[] = [];
  madresList: IMadre[] = [];
  tutoresList: ITutor[] = [];
  
  constructor(private _apiServices : ApiServicesService){}
  
  ngOnInit(): void {
    this._apiServices.getAllAtlets().subscribe((resultado : IAtleta[]) => {
      this.atletsList = resultado
      console.log(this.atletsList.length)
    })
    
    this._apiServices.getAllMadres().subscribe((resultado : IMadre[]) => {
      this.madresList = resultado
      console.log(this.madresList.length)
    })

    this._apiServices.getAllPadres().subscribe((resultado : IPadre[]) => {
      this.padresList = resultado
      console.log(this.padresList.length)
    })
  
    this._apiServices.getAllTutores().subscribe((resultado : ITutor[]) => {
      this.tutoresList = resultado
      console.log(this.tutoresList.length)
    })
    
  }
 

}

import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { IAtleta } from '../models/atleta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  atletsList : IAtleta[] = [];
  
  constructor(private _apiServices : ApiServicesService){}
  
  ngOnInit(): void {
    this._apiServices.getAllAtlets().subscribe((resultado : IAtleta[]) => {
      this.atletsList = resultado
      console.log(this.atletsList.length)
      
      
    })
    
  }
  resultado = this.atletsList.length;

}

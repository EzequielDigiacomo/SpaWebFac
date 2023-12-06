import { Component, OnInit } from '@angular/core';
import { IAtleta } from '../models/atleta.model';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.component.html',
  styleUrls: ['./atletas.component.css']
})
export class AtletasComponent implements OnInit {

  atletsList : IAtleta[] = [];

  constructor(private _apiServices : ApiServicesService){}

  ngOnInit(): void {
    this._apiServices.getAllAtlets().subscribe((data : IAtleta[]) => {
      console.log(data)
      this.atletsList = data
    })
  }
}

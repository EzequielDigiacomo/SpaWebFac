import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-atleta',
  templateUrl: './detalle-atleta.component.html',
  styleUrls: ['./detalle-atleta.component.css']
})
export class DetalleAtletaComponent implements OnInit {

  atleta: string = '';

constructor(private _route: ActivatedRoute) {}

ngOnInit(): void {
  this._route.params.subscribe(params => {
    this.atleta = params['atletaId'];
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IAtleta } from '../models/atleta.model';
import { IMadre } from '../models/madre.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private urlAtleta = 'https://localhost:7258/api/atleta'

  constructor(private _httpClient: HttpClient) { }


  // ------------ Get all ------------
  public getAllAtlets(): Observable<IAtleta[]> {
    return this._httpClient.get<IAtleta[]>(this.urlAtleta)
  }
  
  // ------------Get one ------------
  public getAtletById(id : number): Observable<IAtleta>{
    return this._httpClient.get<IAtleta>(`${this.urlAtleta}/${id}`)
  }

  // ------------Post ------------
  public newAtlet(atleta : IAtleta): Observable<IAtleta>{
    return this._httpClient.post<IAtleta>(`${this.urlAtleta}`,atleta)
  }

  // ------------Put ------------
  public updateAtlet( id: number ,atleta : IAtleta) : Observable<IAtleta>{
    return this._httpClient.put<IAtleta>(`${this.urlAtleta} / ${id}`, atleta)
  }

  // ------------Delete ------------

  public deleteAtlet (id : number){
    return this._httpClient.delete<IAtleta>(`${this.urlAtleta} / ${id}`)
  }

  //----------------Madre----------------------

  private urlMadre = 'https://localhost:7258/api/madreatleta'

  // ------------ Get all ------------
  public getAllMadres(): Observable<IMadre[]> {
    return this._httpClient.get<IMadre[]>(this.urlMadre)
  }
  
  // ------------Get one ------------
  public getMadreById(id : number): Observable<IMadre>{
    return this._httpClient.get<IMadre>(`${this.urlMadre}/${id}`)
  }

  // ------------Post ------------
  public newMadre(madre : IMadre): Observable<IMadre>{
    return this._httpClient.post<IMadre>(`${this.urlMadre}`,madre)
  }

  // ------------Put ------------
  public updateMadre( id: number ,madre : IMadre) : Observable<IMadre>{
    return this._httpClient.put<IMadre>(`${this.urlMadre}/${id}`, madre)
  }

  // ------------Delete ------------

  public deleteMadre (id : number){
    return this._httpClient.delete<IMadre>(`${this.urlMadre} / ${id}`)
  }


}

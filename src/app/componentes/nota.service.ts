import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {Nota} from './nota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //pode usar em todo
})
export class NotaService { //usado para usar em todo o projeto angular
  constructor(private http: HttpClient) { } // solicita dependências ao invés de criar
  private readonly API = 'http://localhost:3000/notas'

  listar():Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API)
  }
  
  criar(nota: Nota): Observable<Nota>{
    return this.http.post<Nota>(this.API, nota)
  }


   //preenche uma nota baseado no ID 
  buscarPorId(id: number): Observable<Nota> {
    const url = `${this.API}/${id}`
    return this.http.get<Nota>(url)
  }

  //
  excluir(id: number): Observable<Nota> {
    const url = `${this.API}/${id}`
    return this.http.delete<Nota>(url)
  }

}




/*
S.O.L.I.D- SOLID são cinco princípios da programação  orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender.
Esses princípios podem ser aplicados a qualquer linguagem de POO.

*/


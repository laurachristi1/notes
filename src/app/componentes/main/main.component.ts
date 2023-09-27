import { Component, Input } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaNotas)=>{
      this.listaNotas=listaNotas
    })
  }


  listaNotas:Nota[]= [];
}


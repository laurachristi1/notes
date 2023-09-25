import { Component, Input } from '@angular/core';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.service.listar()
  }


  listaNotas= [
    {
      titulo: "BBBBB",
      conteudo: "DEU CERTO!",
      tipo: "tipo2"
    },
    {
      titulo: "CCCCC",
      conteudo: "DEU ERRADO!",
      tipo: "tipo3"
    }
  ];
}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
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

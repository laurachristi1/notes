import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() nota = {
    titulo: "TESTE2",
    conteudo: "BBBBBB",
    tipo: "tipo1"
  }
}

import { Component
 } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  nota = {
    titulo: "TESTE",
    conteudo: "TESTEEE",
    tipo: "tipo1"
  }
}

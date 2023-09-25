import { Component, Input } from '@angular/core';
import {Nota} from '../nota';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  @Input() nota:Nota = {
    titulo: " ",
    conteudo: " ",
    tipo: " "
  }
}



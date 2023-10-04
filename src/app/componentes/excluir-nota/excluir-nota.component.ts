import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {
    constructor(
      private router: Router,
      private service: NotaService,
      private route : ActivatedRoute
    ){}

    nota : Nota = {
      id: 0,
      titulo: " ",
      conteudo: " ",
      tipo: "tipo1"
    }

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id') 
      this.service.buscarPorId(parseInt(id!)).subscribe((nota) =>{
          this.nota = nota
      })
    }

    cancelar (){
      this.router.navigate(['/home'])
    }

    excluirNota(){
      if(this.nota.id){
        this.service.excluir(this.nota.id).subscribe(() =>{
          this.router.navigate(['/home'])
        })
      }
    }

}
    
     

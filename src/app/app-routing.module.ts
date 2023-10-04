import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';

const routes: Routes = [ //o que vem depois do nome do site
  {
    path: 'home', //o path é o que vem depois do "/" em um site . exemplo: https://fontawesome.com/search?q=turn%20row&o=r, o path seria o "search..."

    component: MainComponent
  },
  {
    path: 'criar-nota',
    component: CriarNotaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' //pega desde o coemço do site- vai entender que é o vazio
  },
  {
    path: 'excluirNota/:id',
    component: ExcluirNotaComponent
    }
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

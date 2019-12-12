import { Component } from '@angular/core';
import { DataTableOptions } from './api/datatable-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'ciao !!!!';
  public isVisible: boolean = true;
  public currentIndex: number;
  public listaNomi: string[] = ['mario', 'luca', 'maria'];
  public options: DataTableOptions = {
    colsOptions: [
      { label: "Nome cliente", name: 'nome' },
      { label: "Cognome cliente", name: 'cognome' },
      /*  { label: "Età cliente", name: 'eta' },
       { label: "Età cliente2", name: 'eta' } */
    ]
  }
  public listSoggetti: any[] = [
    { nome: "Mario", cognome: "rossi", eta: 30 },
    { nome: "Claudio", cognome: "poggi", eta: 30 },
    { nome: "Enrico", cognome: "ferranti", eta: 30 },
    { nome: "Anna", cognome: "rossi", eta: 30 },
  ]

  public listSoggetti2: any[] = [
    { nome: "Carlo", cognome: "rossi", eta: 30 },
    { nome: "Andrea", cognome: "poggi", eta: 30 },
    { nome: "Maria", cognome: "ferranti", eta: 30 },
  ]

  cambiaTitolo() {
    this.title = 'Ciao Rogerio!!!';
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  select(index: number) {
    this.currentIndex = index;
  }

}

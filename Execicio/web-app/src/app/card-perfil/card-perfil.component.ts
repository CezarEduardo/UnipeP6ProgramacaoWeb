import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {

  public imagem = 'https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg';
  public exibe = false;
  public descricao = 'Disciplina de programação';
  public usuario = 'Cezar Eduardo';
  public profissao = 'Suporte';

  constructor() { }

  ngOnInit(): void {
  }
  public exibePerfil(){
    this.exibe = true;
  }

  public ocultar(){
    this.exibe = false;
  }

  public lista = [

    {
      id: '1',
      year: '2007',
      cert: 'SCPJ 1.5'
    },
    
    {
      id: '2',
      year: '2007',
      cert: 'SCSCWCD 1.5'
    },
    
    {
      id: '3',
      year: '2007',
      cert: 'CTFL'
    }

  ];




}

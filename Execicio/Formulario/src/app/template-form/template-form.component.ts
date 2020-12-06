import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Salvar(form: NgForm) {

    let dados = `

    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereco}
    
    `;
    console.log(dados);

  }

}

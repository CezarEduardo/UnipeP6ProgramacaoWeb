import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clienteslista',
  templateUrl: './clienteslista.component.html',
  styleUrls: ['./clienteslista.component.css']
})
export class ClienteslistaComponent implements OnInit {


  clientes: Cliente[] = [];
  clienteSelecionado : Cliente;
  menssagemSucesso: String;
  messagemErro: String;

  constructor(
    private service : ClientesService, 
    private router: Router
    
    
    ) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe( resposta => this.clientes = resposta);
  
  
  }

  novoCadastro(){
    this.router.navigate(['/clientes-form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service.deletar(this.clienteSelecionado).subscribe( response =>{this.menssagemSucesso = 'Cliente deletado com sucesso!'
    this.ngOnInit();
  },
    erro => this.messagemErro = 'Ocorreu um erro ao deletar o cliente.'
    
    )

  }


}

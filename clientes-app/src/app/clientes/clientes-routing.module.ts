import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormComponent } from "./clientes-form/clientes-form.component";
import { ClienteslistaComponent } from './clienteslista/clienteslista.component';

const routes: Routes = [
  {path: 'clientes-form' , component: ClientesFormComponent },
  {path: 'clientes-lista', component: ClienteslistaComponent},
  {path: 'clientes-form/:id' , component: ClientesFormComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

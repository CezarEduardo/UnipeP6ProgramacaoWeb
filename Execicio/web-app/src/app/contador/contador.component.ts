import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public contador = 0;

  constructor() { }

  ngOnInit(): void {
  }

  contadorClique(){
    this.contador = this.contador + 1 ;
    //this.contador++
  }

}

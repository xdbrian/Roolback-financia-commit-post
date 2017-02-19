import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.html',
})
export class SimpleTable{ 

  titles = [
    {title: 'Cuota'},
    {title: 'Fecha vencimiento'},
    {title: 'Capital'},
    {title: 'Interes'},
    {title: 'Pago cuota'}   
  ];

  cronograma: Array<any>;

  constructor(private http:Http) {


    this.http.get('mocks/ConsultaCuota.json')
      .map(response => response.json().cronograma)
      .subscribe(res => this.cronograma = res);
   
  }
}
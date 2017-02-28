import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'schelude-table',
  templateUrl: './schelude.table.html',
  styleUrls: ['./schelude.table.css']
})
export class ScheludeTableComponent {

  titleTable = [
    {title: 'Cuota'},
    {title: 'Fecha vencimiento'},
    {title: 'Capital'},
    {title: 'Interes'},
    {title: 'Pago cuota'},    
  ];
  cronograma: Array<any>;

  constructor(private http:Http) {
 
  /*  this.http.get('./mocks/ConsultaCuota.json')
      .map(response => response.json().cronograma)
      .subscribe(res => this.cronograma = res);*/
   
  }

}

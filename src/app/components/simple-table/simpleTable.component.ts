import { Component,Input  } from '@angular/core';
import {Http} from '@angular/http';
import { Colum } from '../../module/fec/services/fec.service';

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

  @Input()
  title  : Colum[];

  @Input()
  cronograma  : Colum[];
  
  constructor(private http:Http) {
  }
}
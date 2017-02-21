import { Component,Input  } from '@angular/core';
import {Http} from '@angular/http';
import {Colum} from '../../services/fec.service';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.html',
})
export class SimpleTable{ 

  @Input()
  titles  : String[];

  @Input()
  colums  : Colum[];
  
  constructor(private http:Http) {
  }
}

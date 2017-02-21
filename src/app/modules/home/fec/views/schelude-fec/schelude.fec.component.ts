import { Component,NgZone  } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Colum } from '../../services/fec.service';
//import { MatchMediaService } from '../../../../shared/MatchMediaService';
@Component({
  selector: 'schelude-fec',
  templateUrl: './schelude-fec.html',
  styleUrls: ['./schelude-fec.css']
})
export class ScheludeFecComponent{

  taza :number =50;

  title :String= "FEC - Registro de operaciones";

  cronograma: Colum[];
  titles : Colum[];

  mobile :boolean =false;

  constructor(private http:Http,ngZone:NgZone) {
    this.mobile = window.innerWidth < 700 ? true  : false;            
        window.onresize = (e) =>{
        ngZone.run(() => {
            this.mobile = window.innerWidth < 700 ? true  : false;            
        });
    };
    this.http.get('.app/mocks/getCuotas.json')
        .map(response => response.json().cronograma)
        .subscribe(res => this.cronograma  = res);

         this.http.get('.app/mocks/getCuotas.json')
        .map(response => response.json().titles)
        .subscribe(res => this.titles  = res);  
  }

}
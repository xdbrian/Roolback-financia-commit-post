import { Component,Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'schelude-component',
  templateUrl: './schelude.component.html',
  styleUrls: ['./schelude.component.css']
})
export class ScheludeComponent {


 taza :number =50;

  title :String= "FEC - Registro de operaciones";

  spaceScreens: Array<any>;

  constructor(private http:Http) {

     this.http.get('./mocks/consultaCuota.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

}
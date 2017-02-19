import { Component,Injectable,Optional } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'schelude-fec',
  templateUrl: './schelude-fec.html',
  styleUrls: ['./schelude-fec.css']
})
export class ScheludeFecComponent{

 taza :number =50;

  title :String= "FEC - Registro de operaciones";

  spaceScreens: Array<any>;

  constructor(private http:Http) {

     this.http.get('./mocks/consultaCuota.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

}
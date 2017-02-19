import { Component,Injectable,Optional,Input } from '@angular/core';
import { Http } from '@angular/http';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { Colum } from './../../services/fec.service';
@Component({
  selector: 'register-provider',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent{ 
 
  title :String= "FEC - Registro de operaciones";

  cronograma  : Colum[];

  constructor(private http:Http,private _dialog: MdDialog, private _snackbar: MdSnackBar) {

    this.http.get('./mocks/consultaCuota.json')
        .map(response => response.json().cronograma)
        .subscribe(res => this.cronograma  = res);
    }

     openDialog() {
       
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.componentInstance.title = this.title;
    dialogRef.afterClosed().subscribe(result => {
      this.title = result;   
    });

  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}


@Component({
  templateUrl: '../../dialogs/detalle.proveedor.html',
  styleUrls: ['../../dialogs/detalle.proveedor.css']
})
export class DialogContent {

  public title :String="";
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { 
  }

  
}
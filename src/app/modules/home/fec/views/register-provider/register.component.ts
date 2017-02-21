import { Component,Injectable,Optional,Input,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {MdDialog, MdDialogConfig,MdDialogRef, MdSnackBar} from '@angular/material';
import { Colum } from './../../services/fec.service';
@Component({
  selector: 'register-provider',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit{ 
  
  checked = true;

  ngOnInit(){
    this.http.get('./app/mocks/getProviderss.json')
        .map(response => response.json().providerss)
        .subscribe(res => this.providerss  = res);

       this.http.get('./app/mocks/getProviderss.json')
        .map(response => response.json().titles)
        .subscribe(res => this.titles  = res);     
  }
  title :String= "FEC - Registro de operaciones";

  titles : Colum[];
  providerss  : Colum[];
  test :String = "asdasdas " ;
  constructor(private http:Http,private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    }

  openDialog() {
       
    let dialogRef = this._dialog.open(DialogContent);
    dialogRef.componentInstance.title = this.title;
    dialogRef.componentInstance.test = this.test;
    dialogRef.afterClosed().subscribe(result => {
      this.title = result;   
      this.test = result;
      console.log(result);
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
  public test :String ="";
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { 

    this.test ="change into dialog";
  }

  
}
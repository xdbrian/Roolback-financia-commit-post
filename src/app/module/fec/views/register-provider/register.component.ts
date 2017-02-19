import { Component,Injectable,Optional } from '@angular/core';
import { Http } from '@angular/http';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';


@Component({
  selector: 'register-provider',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent{ 

 taza :number =50;

  title :String= "FEC - Registro de operaciones";

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  spaceScreens: Array<any>;
  isDarkTheme: boolean = false;
  lastDialogResult: string;

  constructor(private http:Http,private _dialog: MdDialog, private _snackbar: MdSnackBar) {

     this.http.get('./mocks/consultaCuota.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

        setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

     openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
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
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
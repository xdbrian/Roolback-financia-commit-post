import { Component,Injectable,Optional } from '@angular/core';
import { Http } from '@angular/http';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
  templateUrl: './register-operation.html',
  styleUrls: ['./register-operation.css']
})
export class OutlayComponent {
 // taza :number =50;

 //  title :String= "Auto Desembolso";

 //  // foods: any[] = [
 //  //   {name: 'Pizza', rating: 'Excellent'},
 //  //   {name: 'Burritos', rating: 'Great'},
 //  //   {name: 'French fries', rating: 'Pretty good'},
 //  // ];

 //  progress: number = 0;

 //  spaceScreens: Array<any>;
 //  isDarkTheme: boolean = false;
 //  lastDialogResult: string;

 //  constructor(private http:Http,private _dialog: MdDialog, private _snackbar: MdSnackBar) {
 //       setInterval(() => {
 //      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
 //    }, 200);
 //  }

 //     openDialog() {
 //    let dialogRef = this._dialog.open(DialogContent);

 //    dialogRef.afterClosed().subscribe(result => {
 //      this.lastDialogResult = result;
 //    })
 //  }

 //  showSnackbar() {
 //    this._snackbar.open('YUM SNACKS', 'CHEW');
 //  }
}


// @Component({
//   template: `
//     <p>This is a dialog</p>
//     <p>
//       <label>
//         This label
//         <input #dialogInput>
//       </label>
//     </p>
//     <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
//   `,
// })
// export class DialogContent {
//   constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subtitle: String = 'Registro de proveedor';

  numActive= 1;

  constructor() {}

changeMenu(pos:number){
  console.log('change '+pos);
  this.numActive =pos;

}
  ngOnInit() {    
  }

}
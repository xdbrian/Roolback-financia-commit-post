import { Component} from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'header-status',
  templateUrl: './header.status.html',
  styleUrls: ['./header.status.css']
})
export class HeaderStatusComponent {
  data =  {
    title : "FEC - Registro de operaciones"
  }


}
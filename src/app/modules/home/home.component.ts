import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'home-module',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent { 

  tiles = [
    {text: 'FEC',link: 'fec', cols: 1, rows: 2, color: 'gray'},
    {text: 'Two', cols: 1, rows: 2, color: 'gray'},
    {text: 'Three', cols: 1, rows: 2, color: 'gray'},
    {text: 'Four', cols: 1, rows: 2, color: 'gray'},
  ];

  constructor(private http:Http) {

  }

}
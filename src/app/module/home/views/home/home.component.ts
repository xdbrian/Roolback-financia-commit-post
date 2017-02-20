import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'register-provider',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class HomeComponent { 

  constructor(private http:Http) {

  }

}


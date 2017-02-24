import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Constant } from '../../core/services/hero';
import { _serviceConstant } from '../../core/services/constant.services';


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit{ 

  constante: Constant = new Constant();
  
  constructor(private heroService: _serviceConstant) {}

  ngOnInit(): void {
         console.log('into init');
    this.constante = this.heroService.getHeroes();
    this.constante.title = 'Financiamiento electronico';

  }

}
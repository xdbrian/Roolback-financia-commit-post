import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Constant } from '../../core/constant/constant';
import { _serviceConstant } from '../../core/services/constant.services';


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit{ 

  constante;
  
  constructor(private heroService: _serviceConstant) {}

  ngOnInit(): void {
    this.constante = this.heroService.getConstant();
    this.constante.title = 'Financiamiento electronico';

  }

}
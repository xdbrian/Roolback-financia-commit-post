import { Component, OnInit } from '@angular/core';

//import { ConstantsService } from './core/services/constants.service';
import { Constant } from './core/constant/constant';
import { _serviceConstant } from './core/services/constant.services';

@Component({
  
  selector: 'app ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [_serviceConstant]
})
export class AppComponent implements OnInit {
  constante;
  subtitle: String = 'Home ';

  numActive= 1;

  OptionsMenu :Menu[] = [
    { value : "home", pos : 1, link : "home"}
  ];

  constructor(private heroService: _serviceConstant) {
   }

  changeMenu(pos:number){
    this.numActive =pos;
  }

  ngOnInit(): void {

    this.constante = this.heroService.getConstant();
  }
  
}

export class Menu{

  value :String;
  pos:number;
  link:String;
}
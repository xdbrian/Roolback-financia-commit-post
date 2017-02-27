import { Component, OnInit } from '@angular/core';

//import { ConstantsService } from './core/services/constants.service';
import { Constant } from './core/constant/constant';
import { serviceConstant } from './core/services/constant.services';

@Component({
  
  selector: 'app ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [serviceConstant]
})
export class AppComponent implements OnInit {
  constante;
  numActive= 1;

  constructor(private serviceConstant: serviceConstant) {}

  changeMenu(pos:number){
    this.numActive =pos;
  }

  ngOnInit(): void {
    this.constante = this.serviceConstant.getConstant();

            let data = {
          "request": {
          "codProduct": "1"
          }
        }

        //this.serviceConstant.getPosts('fe/linevaluation/getlinevaluation',data);
  }
  


}

export class Menu{

  value :String;
  pos:number;
  link:String;
}
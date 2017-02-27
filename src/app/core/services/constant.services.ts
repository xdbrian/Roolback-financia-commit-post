import { Constant } from '../constant/constant';
import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class serviceConstant {

   private IS_MOCK = false; 
   private APP_MOCK = true;
   private PROTOCOL = 'http';
   private HOSTNAME = '172.29.55.238';
   private URL_HOST = this.PROTOCOL + '://' + this.HOSTNAME + '';
   private PORT = 8081;
   private DIR_MOCK = './app/mocks';
   private HTTP= 'http//';
	 private APP_URL= this.URL_HOST;
	 private IP_BACKEND = this.HTTP + 'www.tessss.com';
   private API = '/services/api/ntlc/';
	 private REST_URL_DEFAULT= this.APP_URL + ':' + this.PORT + this.API;
	 private REST_BACKEND =  this.IP_BACKEND + ':' +this.PORT + this.API ;

   private ConstantsURL = {
     "FE_GETLINE_EVALUATION":this.getURL('fe/linevaluation/getlinevaluation')
   }

   constructor(private http:Http) {
    
   }
/*
   private post(nameConstantsURL, data) {

      let headers = new Headers({'Content-Type': 'application/json'});
      this.createAuthorizationHeader(headers);
      
    return this.http.post(this.getURL(nameConstantsURL), data, {headers: headers});
   }
*/
   getPosts(nameConstantsURL,dataObject){
        
        let url = this.getURL(nameConstantsURL);
        let body = JSON.stringify(dataObject);
        let head = new Headers({
            'Content-Type': 'application/json'
        });
        console.log('haciendo petición '+ url);

        this.http.post(url, body, {headers : head})
            .map(res =>  res.json())
            .subscribe(
                data => {console.log(data);},
                err => console.log(err),
                () => console.log('Fetching complete for Server Metrics ')
            );
   }
   

    getConstant() {
      return Constant;
    }

    private getURL(alias) {
          
          if(this.IS_MOCK) {			
                  return  this.DIR_MOCK + alias + '.json';
          }

          if(this.APP_MOCK) {			
            return  this.REST_URL_DEFAULT + alias;
          } else {
                  return this.REST_BACKEND + alias ;
          } 
    }

/*
    private createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
        btoa('username:password')); 
    }

   private get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
   }*/



}
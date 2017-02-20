import { Component, OnInit } from '@angular/core';
import { App } from './shared/app';
import { AppService } from './shared/app.service';
import { Hero} from './shared/Hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subtitle: String = 'Registro de proveedor';
  
  planetsList: App[] = [];
  selectedPlanet: App;
  constructor(private _planetservice: AppService) {}

  ngOnInit() {    
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
    this.selectedPlanet = new App();
  }

  showPlanetInfo(selplanet)
  {
    this.selectedPlanet = selplanet;
  }
}
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { Hero} from '../../shared/Hero';
//import { SimpleTable } from '../../components/simple-table/simpleTable.component'
@Component({
  selector: 'schelude-component',
  templateUrl: './fec.html',
  styleUrls: ['./fec.css']
})
export class FecComponent implements OnInit {
    hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };

  HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

selectedHero: Hero;
  constructor(
    private _appService: AppService) {}

  ngOnInit() {
    //this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
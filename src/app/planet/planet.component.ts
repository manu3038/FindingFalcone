import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FindingFalconeComponent } from '../finding-falcone/finding-falcone.component';
import { PlanetService } from './planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit  {
  @Input() planetssent : any;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(private service: PlanetService) {
  }

ngOnInit(){
  }
  planet(event){
    this.service.removedPlanetArr = this.removePlanet(event.target.value,this.planetssent);
    console.log(this.service.removedPlanetArr);
    console.log(this.service.selectedPlanet);

  }
  removePlanet(distance, arr) {
    const temparr = Object.assign([], arr); 
    var removedPlanet// copy the planets to temporary array
    // removed the selected planet from the array
    for (let i = 0; i < temparr.length; i++) {
      if (temparr[i].distance == distance) {
        removedPlanet = temparr.splice(i, 1);
        i--;
      }
    }
    this.service.selectedPlanet.push(removedPlanet[0].name);
    return temparr;
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PlanetService } from './planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() planetssent: any;
  isDisable: boolean;
  dist: any;
  lableName: any;
  constructor(private service: PlanetService) {}

  ngOnInit() {
    this.isDisable = false;
  }
  planet(event) {
    this.isDisable = true;
    this.dist = event.target.value;
    this.service.removedPlanetArr = this.removePlanet(
      event.target.value,
      this.planetssent
    );
  }
  removePlanet(distance, arr) {
    const temparr = Object.assign([], arr);
    var removedPlanet; // copy the planets to temporary array
    // removed the selected planet from the array
    for (let i = 0; i < temparr.length; i++) {
      if (temparr[i].distance == distance) {
        removedPlanet = temparr.splice(i, 1);
        i--;
      }
    }
    this.lableName = removedPlanet[0].name;
    this.service.selectedPlanet.push(removedPlanet[0].name);
    return temparr;
  }
}

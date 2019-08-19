import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  removedPlanetArr: any;
  selectedPlanet = [];
  constructor() { }
  getPlanetremoved(){
    return this.removedPlanetArr;
  }
}

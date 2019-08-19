import { Component, OnInit } from '@angular/core';
import { FindingFalconeService } from './finding-falcone.service';
import { PlanetComponent } from '../planet/planet.component';
import { PlanetService } from '../planet/planet.service';


@Component({
  selector: 'app-finding-falcone',
  templateUrl: './finding-falcone.component.html',
  styleUrls: [ './finding-falcone.component.css']
})
export class FindingFalconeComponent implements OnInit {
  private vehicles;
  planet1Removed: Array<any>[];
  planet1Vehicle = [];

  planet2Removed: any[];
  planet2Vehicle: any[];
  planet3Vehicle: any[];
  planet3Removed: any;
  planet4Vehicle: any[];

  vehicle1Disable: boolean;
  vehicle2Disable: boolean;
  vehicle3Disable: boolean;
  vehicle4Disable: boolean;

  planet1Distance: any;
  planet2Distance: any;
  planet3Distance: any;
  planet4Distance: any;

  TotalTime: any;
  selectedVehicles: any;
  selectedPlanets: any;
  token: any;
  result: any;
  finding: any;
  planetsComp : PlanetComponent;
  planets: any[];
  planet1Disable: boolean;
  constructor(private service: FindingFalconeService, private planetService: PlanetService) {}

  ngOnInit() {
    this.planets = [];
    this.vehicles = [];
    this.planets = this.service.getPlanets();
    this.vehicles = this.service.getVehicles();
    this.service.getToken().subscribe(res => (this.token = res));
    this.selectedPlanets = [];
    this.selectedVehicles = [];
    this.TotalTime = 0;
    this.finding = true;
  }
  getplanet2arr(){
    this.planet1Removed = this.planetService.getPlanetremoved();
    this.planet2Removed = [];
    this.planet3Removed = [];
  }

  getplanet3arr(){
    this.planet2Removed = this.planetService.getPlanetremoved();
    this.planet3Removed = [];
  }

  getplanet4arr(){
    this.planet3Removed = this.planetService.getPlanetremoved();
  }
 
  // on select on vehicle for planet 1
  vehicle1(event) {
    this.vehicle1Disable = true;
    this.removeVehicle(event.target.value, this.planet1Vehicle);
    this.getTime(this.planet1Distance, event.target.value);
  }

  vehicle2(event) {
    this.vehicle2Disable = true;
    this.removeVehicle(event.target.value, this.planet2Vehicle);
    this.getTime(this.planet2Distance, event.target.value);
  }
  vehicle3(event) {
    this.vehicle3Disable = true;
    this.removeVehicle(event.target.value, this.planet3Vehicle);
    this.getTime(this.planet3Distance, event.target.value);
  }
  vehicle4(event) {
    this.vehicle4Disable = true;
    this.removeVehicle(event.target.value, this.planet4Vehicle);
    this.getTime(this.planet4Distance, event.target.value);
    console.log(this.buildRequest());
    this.finding = false;
  }

  removeVehicle(speed: any, arr) {
    const temparr = Object.assign([], arr);
    for (let i = 0; i < temparr.length; i++) {
      const vehicle = temparr[i];
      if (vehicle.speed == speed && vehicle.total_no >= 1) {
        vehicle.total_no -= 1;
        this.selectedVehicles.push(vehicle.name);
      } else if (vehicle.total_no < 1) {
        temparr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }

  // function to get vehicles based on the planet distance and push to mentioned array
  getVehicles(dist) {
    const temparr = [];
    this.vehicles.forEach(vehicle => {
      if (vehicle.max_distance >= dist && vehicle.total_no > 0) {
        temparr.push(vehicle);
      }
    });
    return temparr;
  }

  getTime(distance: any, speed: any) {
    const time = distance / speed;
    this.TotalTime = this.TotalTime + time;
  }

  buildRequest() {
    const temp = {
      token: this.token.token,
      planet_names: this.selectedPlanets,
      vehicle_names: this.selectedVehicles
    };
    return temp;
  }

  findFalcone() {
    this.service.requestBodyFind = this.buildRequest();
    this.service.totalTime = this.TotalTime;
    }
}

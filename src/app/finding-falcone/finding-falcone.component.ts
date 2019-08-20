import { Component, OnInit } from '@angular/core';
import { FindingFalconeService } from './finding-falcone.service';
import { PlanetComponent } from '../planet/planet.component';
import { PlanetService } from '../planet/planet.service';
import { VehicleService } from '../vehicle/vehicle.service';


@Component({
  selector: 'app-finding-falcone',
  templateUrl: './finding-falcone.component.html',
  styleUrls: [ './finding-falcone.component.css']
})
export class FindingFalconeComponent implements OnInit {
  vehicles:any[];
  planet1Removed: Array<any>[];
  planet1Vehicle = [];
  planet2Removed: any[];
  planet3Removed: any;
  TotalTime: any;
  selectedVehicles: any;
  token: any;
  result: any;
  finding: boolean;
  planetsComp : PlanetComponent;
  planets: any[];
  planet1Disable: boolean;
  constructor(private service: FindingFalconeService, private planetService: PlanetService, private vehicleService : VehicleService ) {}

  ngOnInit() {
    this.planets = [];
    this.vehicles = [];
    this.planets = this.service.getPlanets();
    this.vehicles = this.service.getVehicles();
    this.service.getToken().subscribe(res => (this.token = res));
    this.selectedVehicles = [];
    this.TotalTime = 0;
    this.finding = true;
  }
  getplanet2arr(){
    this.planet1Removed = this.planetService.getPlanetremoved();
    this.planet2Removed = [];
    this.planet3Removed = [];
    this.TotalTime = this.service.totalTime;
  }

  getplanet3arr(){
    this.planet2Removed = this.planetService.getPlanetremoved();
    this.planet3Removed = [];
    this.TotalTime = this.service.totalTime;
  }

  getplanet4arr(){
    this.planet3Removed = this.planetService.getPlanetremoved();
    this.TotalTime = this.service.totalTime;
  }
 
  getTime(distance: any, speed: any) {
    const time = distance / speed;
    this.TotalTime = this.TotalTime + time;
  }

  enableFind(){
    this.TotalTime = this.service.totalTime;
    this.finding = false;
  }
  buildRequest() {
    const temp = {
      token: this.token.token,
      planet_names: this.planetService.selectedPlanet,
      vehicle_names: this.vehicleService.selectedVehicles
    };
    return temp;
  }

  findFalcone() {
    this.service.requestBodyFind = this.buildRequest();
    }
}

import { Component, OnInit } from "@angular/core";
import { FindingFalconeService } from "./finding-falcone.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NgStyle } from "@angular/common";
import { FalconeFoundComponent } from "../falcone-found/falcone-found.component";

@Component({
  selector: "app-finding-falcone",
  templateUrl: "./finding-falcone.component.html",
  styleUrls: ["./finding-falcone.component.css"]
})
export class FindingFalconeComponent implements OnInit {
  private planets;
  private vehicles;
  planet1Removed: Array<any>[];
  planet1Vehicle = [];

  planet2Removed: any[];
  planet2Vehicle: any[];
  planet3Vehicle: any[];
  planet3Removed: any;
  planet4Vehicle: any[];

  planet1Disable: boolean;
  planet2Disable: boolean;
  planet3Disable: boolean;
  planet4Disable: boolean;

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

  constructor(private service: FindingFalconeService,
    private foundFaclcone : FalconeFoundComponent ) {}

  ngOnInit() {
    this.planets = this.service.getPlanets();
    this.vehicles = this.service.getVehicles();
    this.service.getToken().subscribe(res => (this.token = res));
    this.selectedPlanets = [];
    this.selectedVehicles = [];
    this.TotalTime = 0;
  }
  //on change of planet 1
  planet1(event) {
    this.planet1Disable = true;
    this.planet1Distance = event.target.value; //get value from the event
    var planet = this.removedPlanet(this.planet1Distance, this.planets);
    this.planet1Vehicle = this.getVehicles(this.planet1Distance);
    this.planet1Removed = Object.assign([], planet); //clone the selected planet removed to iterate again
  }
  //on select on vehicle for planet 1
  vehicle1(event) {
    this.vehicle1Disable = true;
    this.removeVehicle(event.target.value, this.planet1Vehicle);
    this.getTime(this.planet1Distance, event.target.value);
  }

  getTime(distance: any, speed: any) {
    var time = distance / speed;
    this.TotalTime = this.TotalTime + time;
  }

  //on change of planet 2
  planet2(event) {
    this.planet2Disable = true;
    this.planet2Distance = event.target.value; //get value from the event
    var planet = this.removedPlanet(this.planet2Distance, this.planet1Removed);
    this.planet2Vehicle = this.getVehicles(this.planet2Distance);
    this.planet2Removed = Object.assign([], planet); //clone the selected planet removed to iterate again
  }
  vehicle2(event) {
    this.vehicle2Disable = true;
    this.removeVehicle(event.target.value, this.planet2Vehicle);
    this.getTime(this.planet2Distance, event.target.value);
  }
  //on change of planet 3
  planet3(event) {
    this.planet3Disable = true;
    this.planet3Distance = event.target.value; //get value from the event
    var planet = this.removedPlanet(this.planet3Distance, this.planet2Removed);
    this.planet3Vehicle = this.getVehicles(this.planet3Distance);
    this.planet3Removed = Object.assign([], planet); //clone the selected planet removed to iterate again
  }
  vehicle3(event) {
    this.vehicle3Disable = true;
    this.removeVehicle(event.target.value, this.planet3Vehicle);
    this.getTime(this.planet3Distance, event.target.value);
  }
  //on change of planet 4
  planet4(event) {
    this.planet4Disable = true;
    this.planet4Distance = event.target.value; //get value from the event
    var planet = this.removedPlanet(this.planet4Distance, this.planet3Removed);
    this.planet4Vehicle = this.getVehicles(this.planet4Distance);
  }
  vehicle4(event) {
    this.vehicle4Disable = true;
    this.removeVehicle(event.target.value, this.planet4Vehicle);
    this.getTime(this.planet4Distance, event.target.value);
    console.log(this.buildRequest());
  }

  //function to remove planet based on distance from the given array
  removedPlanet(distance, arr) {
    var temparr = Object.assign([], arr); //copy the planets to temporary array
    //removed the selected planet from the array
    for (var i = 0; i < temparr.length; i++) {
      if (temparr[i].distance == distance) {
        var removedPlanet = temparr.splice(i, 1);
        i--;
      }
    }
    this.selectedPlanets.push(removedPlanet[0].name);
    return temparr;
  }
  removeVehicle(speed: any, arr) {
    var temparr = Object.assign([], arr);
    for (let i = 0; i < temparr.length; i++) {
      const vehicle = temparr[i];
      if (vehicle.speed == speed && vehicle.total_no >= 1) {
        vehicle.total_no -= 1;
        this.selectedVehicles.push(vehicle.name);
      } else if (vehicle.total_no < 1) {
        var removedVehicle = temparr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }

  //function to get vehicles based on the planet distance and push to mentioned array
  getVehicles(dist) {
    var temparr = [];
    this.vehicles.forEach(vehicle => {
      if (vehicle.max_distance >= dist && vehicle.total_no > 0) {
        temparr.push(vehicle);
      }
    });
    return temparr;
  }

  buildRequest() {
    var temp = {
      token: this.token.token,
      planet_names: this.selectedPlanets,
      vehicle_names: this.selectedVehicles
    };
    return temp;
  }

  findFalcone() {
    this.service
      .findFalcone(this.buildRequest())
      .subscribe(res => this.foundFaclcone.storeData(res));
    }
}

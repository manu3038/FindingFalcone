import { Component, OnInit, Input } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { FindingFalconeComponent } from '../finding-falcone/finding-falcone.component';
import { FindingFalconeService } from '../finding-falcone/finding-falcone.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  @Input() distance : any;
  @Input() lableName : any;
  apiVehicles: any;
  vehicles: any[];
  index = 4;
  isDisable: boolean;

  constructor(private service : VehicleService,private findService :FindingFalconeService) { }

  ngOnInit() {
    this.vehicles = this.getVehicles(this.distance);console.log(this.lableName+"in vehicle");
  }

  getVehicles(dist) {
    const temparr = [];
    this.findService.vehicles.forEach(vehicle => {
      if (vehicle.max_distance >= dist && vehicle.total_no > 0) {
        temparr.push(vehicle);
      }
    });
    return temparr;
  }

  vehicle1(event){
    console.log(event.target.value);
    this.vehicles = this.removeVehicle(event.target.value,this.vehicles);
    this.isDisable = true;
  }
  removeVehicle(speed: any, arr) {
    const temparr = Object.assign([], arr);
    for (let i = 0; i < temparr.length; i++) {
      const vehicle = temparr[i];
      if (vehicle.speed == speed && vehicle.total_no >= 1) {
        vehicle.total_no -= 1;
        this.service.selectedVehicles.push(vehicle.name);
      } else if (vehicle.total_no < 1) {
        temparr.splice(i, 1);
        i--;
      }
    }
    console.log(this.service.selectedVehicles);
    
    return arr;
  }
}

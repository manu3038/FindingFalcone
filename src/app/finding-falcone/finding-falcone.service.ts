import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindingFalconeService {
 
 private plantes = [];
  planetsURL = 'https://findfalcone.herokuapp.com/planets';
  
  tokenURL = 'https://findfalcone.herokuapp.com/token';
  falconeURL = 'https://findfalcone.herokuapp.com/find'
  vehiclesURL = 'https://findfalcone.herokuapp.com/vehicles';
  requestBodyFind: any;
  totalTime= 0 ;
  vehicles: any[];
  constructor(private http:HttpClient) { }

  getVehicles(): any {
    this.http.get(this.vehiclesURL).subscribe(
      (val : any[]) =>{
        this.vehicles= [];
        for (let index = 0; index < val.length; index++) {
          this.vehicles.push(val[index]);
        }
      }
    );
    return this.vehicles;
  }
  
  getPlanets(){
     this.http.get(this.planetsURL).subscribe(
      (val: any[]) => {
        for (let index = 0; index < val.length; index++) {
          this.plantes.push(val[index]);
        }
      }
    );
    return this.plantes;
  }
  getToken() {
    const body = '';
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    const options = { headers: headers };
    return this.http.post(this.tokenURL,body,options);
  }

  findFalcone() {
    const body = this.requestBodyFind;
    const headers = new HttpHeaders({ 'Accept': 'application/json' , 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.http.post(this.falconeURL,body,options);
  }
}

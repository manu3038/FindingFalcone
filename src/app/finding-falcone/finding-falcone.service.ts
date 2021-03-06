import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindingFalconeService {
 private plantes = [];
  planetsURL = 'https://findfalcone.herokuapp.com/planets';
  vehiclesURL = 'https://findfalcone.herokuapp.com/vehicles';
  tokenURL = 'https://findfalcone.herokuapp.com/token';
  falconeURL = 'https://findfalcone.herokuapp.com/find'
  private vehicles= [];
  requestBodyFind: any;
  totalTime: any;
  constructor(private http:HttpClient) { }

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
  getVehicles(): any {
    this.http.get(this.vehiclesURL).subscribe(
      (val : any[]) =>{
        for (let index = 0; index < val.length; index++) {
          this.vehicles.push(val[index]);
        }
      }
    );
    return this.vehicles;
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

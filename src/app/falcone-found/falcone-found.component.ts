import { Component, OnInit, Injectable } from "@angular/core";
@Component({
  selector: "app-falcone-found",
  templateUrl: "./falcone-found.component.html",
  styleUrls: ["./falcone-found.component.css"]
})
@Injectable({
  providedIn: "root"
})
export class FalconeFoundComponent implements OnInit {
  successMsg= "";
  dummy: any;
  results: any;

  constructor() {}

  ngOnInit() {
    this.successMsg = "No Result yet";
    console.log(this.successMsg + " before");
    
    // this.result(this.dummy);
    console.log(this.results);
    // this.result(this.results);
    if(this.results !=null){
      if (this.results.status == "success") {
        this.dummy =
          "Congrats you found Falcone. He was in " +
          this.results.planet_name +
          ". Rejoice Your Victory";
        console.log("in if " + this.dummy);
      } else {
        this.dummy =
          "Too Bad! So Sad you weren't Successful in find Falcone.Better Luck Next Time";
        console.log("in else " + this.dummy);
      }
    }
  }
  result(response) {
    
    // console.log(this.results);
    if (response != null) {
      if (response.status == "success") {
        this.successMsg =
          "Congrats you found Falcone. He was in " +
          response.planet_name +
          ". Rejoice Your Victory";
        console.log("in if " + this.successMsg);
      } else {
        this.successMsg =
          "Too Bad! So Sad you weren't Successful in find Falcone.Better Luck Next Time";
        console.log("in else " + this.successMsg);
      }
    }
  }
  storeData(res){
    this.results = Object.assign([], res);
    this.ngOnInit();
  }
}

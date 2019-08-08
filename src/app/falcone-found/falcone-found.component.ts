import { Component, OnInit, Injectable, Input } from "@angular/core";
import { FindingFalconeService } from "../finding-falcone/finding-falcone.service";
@Component({
  selector: "app-falcone-found",
  templateUrl:"./falcone-found.component.html" ,
  styleUrls: ["./falcone-found.component.css"]
})
export class FalconeFoundComponent implements OnInit {
  successMsg: any;
  dummy: any;
  results: any;
  totalTime: any;

  constructor(private service: FindingFalconeService) {}

  ngOnInit() {
    console.log(this.service.requestBodyFind);
    console.log(this.service.totalTime);
    this.service
      .findFalcone()
      .subscribe(res => this.storeData(res, this.service.totalTime));
  }
  storeData(res, time) {
    this.results = Object.assign([], res);
    this.totalTime = time;
    console.log(this.results);
    this.resultz();
  }
  resultz() {
    if (this.results != null) {
      if (this.results.status == "success") {
        this.successMsg =
          "Congrats you found Falcone. He was in " +
          this.results.planet_name +
          ".\n Rejoice Your Victory!! " +
          this.totalTime +
          " amount of time was taken to find him.";
        console.log("in if " + this.successMsg);
      } else {
        this.successMsg =
          "Too Bad! So Sad you weren't Successful in find Falcone. Better Luck Next Time " +
          this.totalTime +
          " amount of time was taken.";
        console.log("in else " + this.successMsg);
      }
    }
  }
}

//     this.successMsg = "No Result yet";
//     console.log(this.successMsg + " before");
//     // this.result(this.dummy);
//     console.log(this.results);
//     // this.result(this.results);

//     // this.successMsg = "The output is in console log. press F12";
//     // this.result(this.results);
//     // this.resultz();
//     if(this.results !=null){
//       if (this.results.status == "success") {
//         this.dummy =
//           "Congrats you found Falcone. He was in " +
//           this.results.planet_name +
//           ". Rejoice Your Victory!!"  + this.totalTime + " amount of time was taken to find him.";
//         console.log("in if " + this.dummy);
//       } else {
//         this.dummy =
//           "Too Bad! So Sad you weren't Successful in find Falcone.Better Luck Next Time"+ this.totalTime + " amount of time was taken.";
//         console.log("in else " + this.dummy);
//       }
//     }
//   }
//   result(response) {
//     // this.successMsg = " ";

//     // console.log(this.results);
//     if (response != null) {
//       if (response.status == "success") {
//         this.successMsg =
//           "Congrats you found Falcone. He was in " +
//           response.planet_name +
//           ". Rejoice Your Victory!! " + this.totalTime + " amount of time was taken to find him.";
//         console.log("in if : " + this.successMsg);
//       } else {
//         this.successMsg =
//           "Too Bad! So Sad you weren't Successful in finding Falcone.Better Luck Next Time "+ this.totalTime + " amount of time was taken.";
//         console.log("in else: " + this.successMsg);
//       }
//     }
//   }
//   resultz(){
//     if(this.results !=null){
//       if (this.results.status == "success") {
//         this.dummy =
//           "Congrats you found Falcone. He was in " +
//           this.results.planet_name +
//           ". Rejoice Your Victory!!"  + this.totalTime + " amount of time was taken to find him.";
//         console.log("in if " + this.dummy);
//       } else {
//         this.dummy =
//           "Too Bad! So Sad you weren't Successful in find Falcone.Better Luck Next Time"+ this.totalTime + " amount of time was taken.";
//         console.log("in else " + this.dummy);
//       }
//     }
//   }
//   storeData(res,time){
//     this.results = Object.assign([], res);
//     this.totalTime = time;
//     this.ngOnInit();
//   }
//   getResult(){
//     console.log(this.successMsg);

//   }
// }

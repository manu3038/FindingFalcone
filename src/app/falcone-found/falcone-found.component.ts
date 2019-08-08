import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FindingFalconeService } from '../finding-falcone/finding-falcone.service';
@Component({
  selector: 'app-falcone-found',
  templateUrl:'./falcone-found.component.html' ,
  styleUrls: ['./falcone-found.component.css']
})
export class FalconeFoundComponent implements OnInit {
  successMsg: any;
  dummy: any;
  results: any;
  totalTime: any;
  timeMsg: string;

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
      if (this.results.status === 'success') {
        this.successMsg =
          'Congrats you found Falcone. He was in ' +
          this.results.planet_name +
          '.\n Rejoice Your Victory!! ';
      } else {
        this.successMsg =
          'Too Bad! So Sad you weren\'t Successful in find Falcone. Better Luck Next Time ';
      }
      this.timeMsg =  this.totalTime +' amount of time was taken.';
    }
  }
}

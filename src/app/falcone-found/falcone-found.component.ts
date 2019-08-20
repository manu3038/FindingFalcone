import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FindingFalconeService } from '../finding-falcone/finding-falcone.service';
@Component({
  selector: 'app-falcone-found',
  templateUrl: './falcone-found.component.html' ,
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
    this.service
      .findFalcone()
      .subscribe(res => this.storeData(res, this.service.totalTime));
  }
  storeData(res, time) {
    this.results = Object.assign([], res);
    this.totalTime = time;
    this.resultz();
  }
  resultz() {
    if (this.results != null) {
      if (this.results.status === 'success') {
        this.successMsg =
          'Congrats you found Queen Al Falcone. She was in ' +
          this.results.planet_name +
          '.\n Rejoice Your Victory!! ';
      } else {
        this.successMsg =
          'Too Bad! So Sad you weren\'t Successful in find Queen Al Falcone. Better Luck Next Time ';
      }
      this.timeMsg =  this.totalTime +' amount of time was taken.';
    }
  }
}

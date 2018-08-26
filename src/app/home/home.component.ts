import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Excel } from '../../Models/excel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rows: Excel;
  constructor(private dservice: DataService) { }
  frow: Boolean;
  pname: any = [];
  plogtype: [{
    datarow: [any];
  }];


  ngOnInit() {
  }

  viewProfile() {

  }
}

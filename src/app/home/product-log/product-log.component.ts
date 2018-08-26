import { Component, OnInit } from '@angular/core';
import { Excel } from '../../../Models/excel.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-log',
  templateUrl: './product-log.component.html',
  styleUrls: ['./product-log.component.css']
})
export class ProductLogComponent implements OnInit {

  rows: Excel;
  constructor(private dservice: DataService) { }
  frow: Boolean;
  pname: any = [];
  row: any = [];
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.frow = true;
    let i  = 0;
    this.dservice.getData().subscribe((data: any) => {
        data._rows.forEach(row => {
           // console.log(column._cells);
            row._cells.forEach(cell => {
              if ( i === 0  ) {
         this.pname.push(cell._value.model.value);
            //  console.log(cell._value.model.value);
              } else {
                this.plogtype[i - 1].datarow.push();
              }
            });
            i = i + 1;
        });
    }, null, () => {
          this.pname.forEach(value => {
              console.log(value);
          });
    });
  }
}

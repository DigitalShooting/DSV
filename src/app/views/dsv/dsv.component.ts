import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { DsvApiService } from "../../dsv-api.service";
import { Session, Target, Serie } from "../../classes/session";

@Component({
  selector: 'app-dsv',
  templateUrl: './dsv.component.html',
  styleUrls: ['./dsv.component.scss']
})
export class DSVComponent implements OnInit {



  @Input() fullWidth: number;
  @Input() fullHeight: number;
  width: string;
  height: string;
  
  // Number of total items to show in the grid
  items: number = 0;
  
  calcXY() {
    if (this.lines == null) { return; }
    
    const items = Object.keys(this.lines).length + Object.keys(this.teams).length;
    this.items = items;
    
    // diff ratio of the window, 1.0 if its exactly 16/9 (which the page
    // was designed for), bigger if the width is bigger than the height
    // (in ratio to 16/9), or otherwise for smaller than 1.0.
    // var ratioDiff = this.fullWidth/this.fullHeight * 1/1.5;
    var ratioDiff = this.fullWidth/this.fullHeight * 1.2;
    if (ratioDiff < 1) ratioDiff = ratioDiff * 1.5;//((1-ratioDiff) * 10)

    var x = Math.floor( Math.sqrt(items) * ratioDiff );
    
    // fix possible bigger x than items
    if (x > items) x = items;
    
    var y = Math.ceil( items / x);
    
    // Balance items as long as we overshoot
    while ((x-1)*y >= items) {
      x += -1
    }

    this.width = (100 / x) + "%";
    this.height =  (100 / y) + "%";
    
    // console.log("xy", this.fullWidth, this.fullHeight, this.width, this.height);
  }


  ngOnChanges() {
    this.calcXY();
  }


  lines = {};
  teams = {};

  constructor(dsvAPI: DsvApiService) {
    dsvAPI.connected.subscribe(connected => console.log("isConnected", connected))
    dsvAPI.data.subscribe(onlineLines => {
      if (onlineLines != null) {
        let lines = {};
        Object.keys(onlineLines.lines).forEach(key => {
          if (onlineLines.lines[key].online == true && onlineLines.lines[key].cache.setData != null) {
            lines[key] = onlineLines.lines[key];
          }
        });
        this.lines = lines;
        this.teams = onlineLines.teams;
      }
      this.calcXY();
    });
    this.calcXY();
	}

  ngOnInit(): void {
    this.calcXY();
  }
  
  
  
  
  detailLine: any;
  openDetailLine(line: any) {
    this.detailLine = line;
  }
  closeDetail() {
    this.detailLine = null;
  }

}

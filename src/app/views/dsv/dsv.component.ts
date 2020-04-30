import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { DsvApiService } from "../../dsv-api.service";
import { Session, Target, Serie, DSCLine } from "../../classes/session";

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
  mode: string;
  
  @HostBinding("style.--some-var") private fontCorrection: string;

  // calcXY() {
  //   if (this.lines == null) { return; }
  // 
  //   const items = 12;//Object.keys(this.lines).length;
  // 
  //   // diff ratio of the window, 1.0 if its exactly 16/9 (which the page
  //   // was designed for), bigger if the width is bigger than the height
  //   // (in ratio to 16/9), or otherwise for smaller than 1.0.
  //   var ratioDiff = this.fullWidth/this.fullHeight * 10/16;
  // 
  //   // the number of items in a row will be count(items)^(0.45*ratioDiff)
  //   var x = Math.round( Math.pow(items, 0.45 * ratioDiff));
  // 
  //   // fix possible bigger x than items
  //   if (x > items) x = items;
  // 
  //   var y = Math.ceil( items / x);
  // 
  //   var tmpItemSize = {
  //     width: this.fullWidth/x,
  //     height: this.fullHeight/y,
  //   };
  // 
  //   this.width = (100 / x) + "%";
  //   this.height =  (100 / y) + "%";
  //   this.mode = tmpItemSize.width < 1.5*tmpItemSize.height ? "portrait" : "landscape";
  //   console.log("xy", this.fullWidth, this.fullHeight, this.width, this.height);
  // }
  
  calcXY() {
    if (this.lines == null) { return; }
    
    const items = Object.keys(this.lines).length;
    
    // diff ratio of the window, 1.0 if its exactly 16/9 (which the page
    // was designed for), bigger if the width is bigger than the height
    // (in ratio to 16/9), or otherwise for smaller than 1.0.
    var ratioDiff = this.fullWidth/this.fullHeight * 12/16;

    // the number of items in a row will be count(items)^(0.45*ratioDiff)
    // var x = Math.round( Math.pow(items, 0.45 * ratioDiff));
    var x = Math.round(2 * ratioDiff*2);
    if (x < 2) x = 2;

    // fix possible bigger x than items
    if (x > items) x = items;

    var y = Math.ceil( items / x);

    // var tmpItemSize = {
    //   width: this.fullWidth/x,
    //   height: this.fullHeight/y,
    // };

    this.width = (100 / x) + "%";
    this.height =  (100 / y) + "%";
    this.mode = "landscape";
    
    this.fontCorrection = "7vmin";
    // document.documentElement.style.setProperty("--font-size-big",  (1/Math.pow(items,0.5) * 15) + "vmin");
    // this.mode = x > y ? "landscape" : "portrait";
    // this.mode = tmpItemSize.width < 1.5*tmpItemSize.height ? "portrait" : "landscape";
    console.log("xy", this.fullWidth, this.fullHeight, this.width, this.height);
  }


  ngOnChanges() {
    this.calcXY();
  }



  lines;

  constructor(dsvAPI: DsvApiService) {
    dsvAPI.connected.subscribe(connected => console.log("isConnected", connected))
    dsvAPI.data.subscribe(data => {
      
      this.lines = data;
      
      Object.keys(this.lines).forEach(key => {
        if (this.lines[key].online == false) {
          delete this.lines[key];
        }
      });
      
      
      if (this.lines != null && this.lines["standTest1"] != null) {
        this.lines["standTest001"] = this.lines["standTest1"];
        this.lines["standTest002"] = this.lines["standTest1"];
        this.lines["standTest003"] = this.lines["standTest1"];
        this.lines["standTest004"] = this.lines["standTest6"];
        this.lines["standTest005"] = this.lines["standTest6"];
        this.lines["standTest0001"] = this.lines["standTest1"];
        this.lines["standTest0002"] = this.lines["standTest1"];
        this.lines["standTest0003"] = this.lines["standTest1"];
        this.lines["standTest0004"] = this.lines["standTest6"];
        this.lines["standTest0005"] = this.lines["standTest6"];
        
        // this.lines["standTest001003"] = this.lines["standTest1"];
        // this.lines["standTest00004"] = this.lines["standTest6"];
        // this.lines["standTest00005"] = this.lines["standTest6"];
      }
      this.calcXY();
      // this.lines = Object.keys(data).map(key => {
      //   return {"lineID": key, "session": data[key]};
      // });
      // console.log("all lines", this.lines);
      
      // if (this.lines.length > 0) {
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      // 
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      // 
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      //   this.lines.push(this.lines[0])
      // }
      
      // if (session != null) {
      //   this.activePart = session.parts[session.active_part];
      //   this.selectedSeriesIndex = this.activePart.series.length - 1;
      //   this.selectedShotIndex = this.activePart.series[this.selectedSeriesIndex].shots.length - 1;
      //   this.disciplinePart = session.discipline.parts.find(part => part.id == this.activePart.part_type);
      // }
      // this.session = session;
      
      
    })
    
    this.calcXY();
	}

  ngOnInit(): void {
    this.calcXY();
  }

}

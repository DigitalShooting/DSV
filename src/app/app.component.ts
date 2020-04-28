import { Component, OnInit } from '@angular/core';

import { DsvApiService } from "./dsv-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DSV';
  
  socketConnected: Boolean = false;

  constructor(dscAPI: DsvApiService) {
    dscAPI.connected.subscribe(connected => this.socketConnected = connected);
	}
  
  
  ngOnInit(): void {
    window.addEventListener('load', this.onResize.bind(this), false);
		window.addEventListener('resize', this.onResize.bind(this), false);
    this.updateDimensions();
  }
  
  updateDimensionsTimeout: number;
  onResize() {
    clearTimeout(this.updateDimensionsTimeout);
    this.updateDimensionsTimeout = setTimeout(this.updateDimensions.bind(this), 250);
  }
  
  width: number;
  height: number;
  updateDimensions() {
    this.width = window.innerWidth*window.devicePixelRatio;
    this.height = window.innerHeight*window.devicePixelRatio;
    console.log("update dim", this.width, this.height);
  }
}

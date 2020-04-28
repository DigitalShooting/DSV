import { Component, OnInit, Input } from '@angular/core';

import { Session, Target, Serie } from "../../../classes/session";

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
})
export class TargetComponent implements OnInit {
  
  @Input() target: Target;
  @Input() series: Serie;
  @Input() selectedShotIndex: number;
  @Input() line: string = '';

  @Input() has_trial_corner: boolean = false;

  @Input() width: string = "200";
  @Input() height: string = "200";

  viewBox: string = "";
  private radius: number;
  private border_width: number;
  private scale: number;
  
  ngOnChanges() {
    if (this.target == null) {return}
    
    this.radius = this.target.rings[this.target.rings.length-1].width + 1;
    this.border_width = this.radius / 400;

    if (this.series != null && this.selectedShotIndex != null) {
      this.scale = this.calculateScale(this.series, this.target);
    }
    else {
      this.scale = 1;
    }

    this.viewBox = ((-this.radius)/this.scale) + " " + ((-this.radius)/this.scale) + " " + ((2*this.radius)/this.scale) + " " + ((2*this.radius)/this.scale);
  }

  private calculateScale(series: Serie, target: Target): number {
    var shot = series.shots[this.selectedShotIndex];
    var zoom = 1;
    if (shot != null) {
      target.rings.every(ring => {
        if (ring.value === Math.floor(shot.ring)) {
          if (ring.zoom != null) {
            zoom = ring.zoom;
            return false;
          }
        }
        return true;
      });
    }
    return zoom;
  }
  
  
  
  
  calculateHeight: () => void = () => {};
  
  ngOnInit() {
    
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) { // Chrome
      } else { // Safari
        this.calculateHeight = () => {
          this.height = document.getElementById("target_super").clientHeight + "px";
        }
      }
    }
    
  }
  
  ngAfterViewInit() {
    setTimeout(this.calculateHeight, 0.1);
  }
  
  onResize(event) {
    this.calculateHeight()
  }
}

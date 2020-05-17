import { Component, OnInit, Input } from '@angular/core';

import { Session } from "../../../classes/session";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  @Input() session: Session;
  
  textColor = "";
  label = "";
  rest = "";
  gesamt = "";
  private refreshIntervalId: number;
  
  secondsToString(seconds) {
		var numhours = Math.floor(seconds / 3600);
		var numminutes = Math.floor((seconds % 3600) / 60);
		var numseconds = (seconds % 3600) % 60;
		
    const toFixedDown = function(number, digits) {
			var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
				m = number.toString().match(re);
				return m ? parseFloat(m[1]) : number.valueOf();
		};
		var string = "";
		if(numhours > 0){ string += toFixedDown(numhours, 0) + "h "; }
		if(numminutes > 0){ string += toFixedDown(numminutes, 0) + "m "; }
		if(numseconds > 0){ string += toFixedDown(numseconds, 0) + "s "; }

		return string;
	}
  
  updateClock() {
    var part = this.session.sessionParts[this.session.sessionIndex];
    
    if (part.time.enabled === true){
      let date = (part.time.end - (new Date().getTime()))/1000;

      this.label = "Verbleibende Zeit";
      if (date > 0){
        this.rest = this.secondsToString(date);

        let percentOver = 1 - (date / (part.time.duration*60));
        if (percentOver < 0.8) {
          this.textColor = "#000000";
        }
        else if (percentOver < 0.9) {
          this.textColor = "#ffa500";
        }
        else {
          this.textColor = "#ff0000";
        }
      }
      else {
        this.rest = "Zeit abgelaufen";
        this.textColor = "#ff0000";
      }
      this.gesamt = this.secondsToString(part.time.duration*60);
    }
  }

  constructor() { }

  ngOnChanges() {
    clearInterval( this.refreshIntervalId );
    this.refreshIntervalId = setInterval(this.updateClock.bind(this), 1000);
    this.updateClock();

    // if (
    //   this.session.time.enabled === false
    // ) $scope.hidden = true;
    // else $scope.hidden = false;
  }

}

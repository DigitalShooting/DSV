import { Component, OnInit, Input } from '@angular/core';

import { Session, Target, Serie, Part, Shot, Config } from "../../classes/session";

@Component({
  selector: 'app-dsc-mini',
  templateUrl: './dsc-mini.component.html',
  styleUrls: ['./dsc-mini.component.scss']
})
export class DscMiniComponent implements OnInit {

  @Input() session: Session;
  @Input() labelShort: string;
  @Input() mode: string;
  
  target: Target
  currentPart: Part;
  currentSeries: Serie;
  currentShot: Shot
  selectedShotIndex: number;
  has_trial_corner: boolean = false;
  
  nameFontClass = "";
  vereinFontClass = "";
  
  ngOnChanges() {
    if (this.session != null) {
      const session = this.session;
      this.target = session.disziplin.scheibe;
      const active_part = session.sessionParts[session.sessionIndex];
      this.currentPart = active_part;
      
      const disciplinePart = session.disziplin.parts[active_part.type];
      this.has_trial_corner = disciplinePart.probeEcke;
      
      if (active_part.serien.length > 0) {
        this.currentSeries = active_part.serien[active_part.serien.length - 1];
        
        if (this.currentSeries.shots.length > 0) {
          this.selectedShotIndex = this.currentSeries.shots.length - 1;
          this.currentShot = this.currentSeries.shots[this.selectedShotIndex];
        }
        else {
          this.currentShot = null;
          this.selectedShotIndex = null;
        }
      }
      else {
        this.currentSeries = null;
        this.currentShot = null;
        this.selectedShotIndex = null;
      }
      
      // Font Size calc, based on the length of the text
      this.nameFontClass = "medium";
      let userLength = session.user.firstName.length + session.user.lastName.length;
      if (userLength > 20) this.nameFontClass = "small";
      
      let vereinLength = session.user.verein.length;
      this.vereinFontClass = "medium";
      if (vereinLength > 20) this.vereinFontClass = "small";
    }
    else {
      this.target = null;
      this.currentSeries = null;
      this.selectedShotIndex = null;
      this.currentPart = null;
      this.has_trial_corner = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

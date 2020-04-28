import { Component, OnInit, Input } from '@angular/core';

import { Session, Target, Serie, Part, Shot } from "../../classes/session";

@Component({
  selector: 'app-dsc-mini',
  templateUrl: './dsc-mini.component.html',
  styleUrls: ['./dsc-mini.component.scss']
})
export class DscMiniComponent implements OnInit {

  @Input() session: Session;
  @Input() mode: string;
  
  target: Target
  currentPart: Part;
  currentSeries: Serie;
  currentShot: Shot
  selectedShotIndex: number;
  has_trial_corner: boolean = false;
  
  ngOnChanges() {
    if (this.session != null) {
      const session = this.session;
      this.target = session.discipline.target;
      const active_part = session.parts[session.active_part];
      this.currentPart = active_part;
      
      const disciplinePart = session.discipline.parts.find(part => part.id == active_part.part_type);
      this.has_trial_corner = disciplinePart.has_trial_corner;
      
      this.currentSeries = active_part.series[active_part.series.length - 1];
      
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

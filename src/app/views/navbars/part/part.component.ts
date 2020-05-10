import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DisciplinePart, Part, Session } from "../../../classes/session";
import { DscApiService } from "../../../dsc-api.service";

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {
  
  @Output()
  openPartModal = new EventEmitter<boolean>();
  
  onClickPart() {
    // this.openPartModal.emit();
  }
  
  onHover(state: boolean) {
    this.openPartModal.emit(state);
  }

  activeDisciplinePart: DisciplinePart;
  activePart: Part;
  disciplineParts: DisciplinePart[];
  _session: Session;
  @Input()
  set session(session: Session) {
    this._session = session;
    this.activePart = session.sessionParts[session.sessionIndex];
    this.activeDisciplinePart = session.disziplin.parts[this.activePart.type];
    // this.disciplineParts = session.disziplin.parts;
    // Object.keys(session.disziplin.parts).forEach(dPart => {
    //   let active_part = session.active_part;
    //   let part = session.parts[active_part];
    //   if (dPart.id == part.part_type) {
    //     this.disciplinePart = dPart;
    //     return;
    //   }
    // });
  }
  
  
  // getDisciplinePart(type: String): DisciplinePart {
  //   return this._session.discipline.parts.find(part => part.id == type);
  // }
  
  // selectPart(partId: number) {
  // 
  // }
  
  
  
  togglePart() {
    this.dscAPI.togglePart();
  }
  


  dscAPI: DscApiService;
  constructor(dscAPI: DscApiService) {
    this.dscAPI = dscAPI;
  }

  ngOnInit() {
  }

}

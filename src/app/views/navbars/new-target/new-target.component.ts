import { Component, OnInit } from '@angular/core';
import { DscApiService } from "../../../dsc-api.service";

@Component({
  selector: 'app-new-target',
  templateUrl: './new-target.component.html',
  styleUrls: ['./new-target.component.scss']
})
export class NewTargetComponent implements OnInit {

  dscAPI: DscApiService;

  constructor(dscAPI: DscApiService) {
    this.dscAPI = dscAPI;
  }

  ngOnInit() { }

  newTarget() {
    this.dscAPI.setNewTarget()
  }

}

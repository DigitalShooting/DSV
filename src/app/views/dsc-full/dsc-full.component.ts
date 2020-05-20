import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DsvApiService } from "../../dsv-api.service";
import { DscGatewayInterface, OnlineLinesLine, OnlineLines } from "../../classes/session";

// import { Session, Target, Serie} from "../dsc/classes/session";
import { DscAPI_Token } from "../dsc/api";

// import { Session, Target, Serie, Part, Shot, Config } from "../dsc/classes/session";

@Component({
  selector: 'app-dsc-full',
  templateUrl: './dsc-full.component.html',
  styleUrls: ['./dsc-full.component.scss']
})
export class DscFullComponent implements OnInit {

  constructor(public dsvAPI: DsvApiService, private route: ActivatedRoute, @Inject(DscAPI_Token) public dscAPI: DscGatewayInterface) {}

  lineID: string;
  onlineLines: OnlineLines;
  
  enableEdit = false;

  ngOnInit(): void {
    this.dscAPI.closeDetail();
    this.route.params.subscribe(params => {
       this.lineID = params['lineID'];
       this.update();
    });
    this.dsvAPI.data.subscribe(onlineLines => {
      this.onlineLines = onlineLines;
      this.update();
    });
  }
  
  update() {
    if (this.onlineLines != null && this.lineID != null) {
      let line = this.onlineLines.lines[this.lineID];
      if (line != null) {
        this.dscAPI.setDetail(line);
      }
    }
  }

}




// ngOnInit(): void {
//   // this.calcXY();
// }


// 
// detailLine: OnlineLinesLine;
// openDetailLine(line: OnlineLinesLine) {
//   this.enableEdit = environment.enableEdit && this.dscAPI.hasKey;
//   this.detailLine = line;
//   this.dscAPI.setDetail(line);
// }
// closeDetail() {
//   this.detailLine = null;
//   this.dscAPI.closeDetail();
// }

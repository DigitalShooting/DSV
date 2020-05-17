import { DscAPIInterface } from "../views/dsc/api";

export interface DscGatewayInterface extends DscAPIInterface {
  setDetail(line: OnlineLinesLine);
  closeDetail();
  hasKey: boolean;
}



export class OnlineLines {
  lines: any;
  staticContent: any;
  teams: any;
}

export class OnlineLinesLine {
  cache: any;
  id: string;
  ip: string;
  label: string;
  labelShort: string;
  online: boolean;
  port: string;
}

export class OnlineLinesTeam {
  anzahl: number;
  gesamt: number;
  hochrechnung: number;
  manschaft: string;
  numberOfUsersInTeam: number;
  progress: number;
  schnitt: number;
  teamID: string;
  users: any[];
  verein: string;
}

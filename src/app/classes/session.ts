
export class Session {
  _id: number;
  line: string;
  date: Date;
  sessionParts: Part[];
  user: User;
  disziplin: Discipline;
  sessionIndex: number;
}
export class User {
  // id: number;
  firstName: string;
  lastName: string;
  verein: string;
  manschaft: string;
}



export class Part {
  type: string;
  serien: Serie[];
  
  anzahl: number;
  gesamt: number;
  schnitt: string;
  // counts
  bestTeiler: string;
  // selection
  time: PartTime;
  duration: number;
  schnittCalc: number;
  
}
export class PartTime {
  enabled: boolean;
  // TODO
}

export class Serie {
  shots: Shot[];
  anzahl: number;
  gesamt: number;
  duration: number;
  schnitt: string;
}

export class Shot {
  ring: ShotRing
  time: Date;
  x: number;
  y: number;
  teiler: number;
  winkel: string;
  number: number;  
  innenZehner: boolean;
}
export class ShotRing {
  display: string;
  value: number;
  int: number;
}











export class Discipline {
  _id: string;
  title: string;
  interface: any;
  time: DisciplineTime;
  scheibe: Target;
  // interface: Interface;
  partsOrder: string[];
  parts: any;
}
class DisciplineTime {
  enabled: boolean;
  duration: number;
  instantStart: boolean;
}
export class Target {
  title: string;
  ringe: Ring[];
  ringeDrawOnly: Ring[];
  // rechteckDrawOnly
  defaultHitColor: string;
  defaultZoom: number;
  minZoom: number;
  innenZehner: number;
  kugelDurchmesser: number;
  probeEcke: ProbeEcke;
}
export class Ring {
  value: number;
  width: number;
  color: string;
  text: boolean;
  textColor: string;
  hitColor: string;
  zoomScale: number;
}
export class ProbeEcke {
  color: string;
  alpha: string;
}
export class DisciplinePart {
  // id: string;
  title: string;
  probeEcke: boolean;
  mainPart: boolean;
  neueScheibe: boolean;
  serienLength: number;
  anzahlShots: number;
  showInfos: boolean;
  zehntel: boolean;
  time: DisciplineTime;
  average: DisciplineAverage;
  exitType: string;
}
class DisciplineAverage {
  enabled: boolean;
  anzahl: number;
}














export class Config {
  disziplinen: ConfigDiscipline;
  line: ConfigLine;
}

export class ConfigDiscipline {
  all: any;
  defaultDisziplin: Discipline;
  groups: ConfigDisciplineGroup[];
  
}
export class ConfigDisciplineGroup {
  title: string;
  disziplinen: string[];
}

export class ConfigLine {
  id: string;
  title: string;
}


export class OnlineLines {
  lines: any;
  staticContent: any;
  teams: any;
}

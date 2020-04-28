export class NumberString {
  value: number;
  text: string;
}


export class Club {
  id: number;
  name: string;
}

export class Line {
  id: number;
  name: string;
  short_name: string;
}

export class Team {
  name: number;
  id: string;
}

export class User {
  id: number;
  first_name: string;
  last_name: string;
}

export class Info {
  club: Club;
  line: Line;
  team: Team;
  user: User;
}




export class Part {
  date: Date;
  number_of_shots: number;
  part_type: string;
  series: Serie[];
  sum: NumberString;
  result_prediction: string;
  average: string;
}

export class Serie {
  shots: Shot[];
  sum: NumberString;
  number_of_shots: number;
}

export class Shot {
  angle: number;
  date: Date;
  ring: number;
  ring_count: number;
  ring_text: string;
  teiler: number;
  x: number;
  y: number;
  is_inner_ten: boolean;
  number: number;
}







export class Discipline {
  id: string;
  // interface: Interface;
  parts: DisciplinePart[];
  target: Target;
  time: DisciplineTime;
  title: string;
}

export class DisciplinePart {
  average: DisciplineAverage;
  count_mode: CountMode;
  enable_reset_to_new_target: boolean;
  exit_type: ExitType;
  has_trial_corner: boolean;
  id: string;
  main_part: boolean;
  mane: string;
  number_of_shots: number;
  series_length: number;
  show_infos: boolean;
  time: DisciplineTime
}

export class Target {
  bullet_diameter: number;
  default_hit_color: Color;
  default_zoom: 1;
  inner_ten: number;
  min_zoom: number;
  rings: Ring[];
  rings_draw_only: Ring[];
  title: string;
  trial_corner_color: Color;
}

export class Ring {
  color: Color;
  has_text: boolean;
  hit_color: Color;
  text_color: Color;
  value: number;
  width: number;
  zoom: number;
}

export class Color {
  hex: string;
  alpha: number;
}

class DisciplineAverage {
  type: string;
}
enum CountMode {
    Integer = "Integer",
    Tenth = "Tenth",
}
enum ExitType {
  Always = "Always",
  BevorFirst = "BevorFirst",
  Never = "Never",
}
class DisciplineTime {
  type: string;
}






export class Session {
  id: number;
  date: Date;
  discipline: Discipline;
  info: Info;
  number_of_shots: number;
  active_part: string;
  parts: Part[];
  sum: NumberString
}





export class DSCLines {
  lines: DSCLine[];
}

export class DSCLine {
  lineID: string;
  session: Session;
}

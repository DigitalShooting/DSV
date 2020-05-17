import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFittextModule } from 'angular-fittext';

// Header components
import { ClockComponent } from './clock/clock.component';
import { TimeComponent } from './time/time.component';
import { ShotsComponent } from './shots/shots.component';
import { AverageComponent } from './average/average.component';
import { SumComponent } from './sum/sum.component';

// Foother components
import { UserComponent } from './user/user.component';
import { ClubComponent } from './club/club.component';
import { DisciplinComponent } from './disciplin/disciplin.component';
import { NewTargetComponent } from './new-target/new-target.component';
import { PartComponent } from './part/part.component';
import { ActionsComponent } from './actions/actions.component';

import { TargetModule } from '../target/target.module';


@NgModule({
  declarations: [
    ClockComponent, TimeComponent, ShotsComponent, AverageComponent, SumComponent,
    UserComponent, ClubComponent, DisciplinComponent, NewTargetComponent, PartComponent, ActionsComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule, TargetModule, AngularFittextModule,
  ],
  exports: [
    ClockComponent, TimeComponent, ShotsComponent, AverageComponent, SumComponent,
    UserComponent, ClubComponent, DisciplinComponent, NewTargetComponent, PartComponent, ActionsComponent,
  ],
})
export class NavbarsModule { }

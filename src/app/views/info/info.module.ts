import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { CurrentShotComponent } from './currentShot/currentShot.component';
import { CurrentSeriesComponent } from './currentSeries/currentSeries.component';
import { SeriesOverviewComponent } from './seriesOverview/seriesOverview.component';
import { ShotArrowComponent } from './shotArrow/shotArrow.component';

@NgModule({
  declarations: [
    CurrentShotComponent, CurrentSeriesComponent, SeriesOverviewComponent,
    ShotArrowComponent,
  ],
  imports: [
    CommonModule, FlexLayoutModule,
  ],
  exports: [
    CurrentShotComponent, CurrentSeriesComponent, SeriesOverviewComponent,
  ],
})
export class InfoModule { }

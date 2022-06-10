import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpgsComponent } from './components/cpgs/cpgs.component';
import { DdsComponent } from './components/dds/dds.component';
import { CostcubeComponent } from './components/costcube/costcube.component';
import { PuprefbymodeComponent } from './components/puprefbymode/puprefbymode.component';
import { PiechartsComponent } from './components/piecharts/piecharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HelloComponent } from './hello.component';
import { MapcomponentsComponent } from './components/mapcomponents/mapcomponents.component';
import { TriplechartComponent } from './components/triplechart/triplechart.component';
import { FinalmapComponent } from './components/finalmap/finalmap.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { CovidheatComponent } from './components/covidheat/covidheat.component';
// import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent,
    CpgsComponent,
    DdsComponent,
    CostcubeComponent,
    PuprefbymodeComponent,
    PiechartsComponent,
    HelloComponent,
    MapcomponentsComponent,
    TriplechartComponent,
    FinalmapComponent,
    HeatmapComponent,
    CovidheatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
    // HighchartsChartModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

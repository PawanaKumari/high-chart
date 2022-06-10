import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CostcubeComponent } from './components/costcube/costcube.component';
import { CovidheatComponent } from './components/covidheat/covidheat.component';
import { CpgsComponent } from './components/cpgs/cpgs.component';
import { DdsComponent } from './components/dds/dds.component';
import { FinalmapComponent } from './components/finalmap/finalmap.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { MapcomponentsComponent } from './components/mapcomponents/mapcomponents.component';
import { PiechartsComponent } from './components/piecharts/piecharts.component';
import { PuprefbymodeComponent } from './components/puprefbymode/puprefbymode.component';
import { TriplechartComponent } from './components/triplechart/triplechart.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CostcubeComponent},
  {path:"app-costcube",component:CostcubeComponent},
  {path:"app-cpgs",component:CpgsComponent},
  {path:"app-dds",component:DdsComponent},
  {path:"app-puprefbymode",component:PuprefbymodeComponent},
  {path:"app-piecharts",component:PiechartsComponent},
  {path:"app-mapcomponents",component:MapcomponentsComponent},
  {path:"app-triplechart",component:TriplechartComponent},
  {path:"app-finalmap",component:FinalmapComponent},
  {path:"app-heatmap",component:HeatmapComponent},
  {path:"covidheat",component:CovidheatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

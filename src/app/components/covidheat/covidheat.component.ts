import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import { Options } from 'highcharts';
import worldMap from "@highcharts/map-collection/custom/usa-and-canada.geo.json";

@Component({
  selector: 'app-covidheat',
  templateUrl: './covidheat.component.html',
  styleUrls: ['./covidheat.component.scss'],
})
export class CovidheatComponent implements OnInit {
  rad: any = 0;
  array1: any = [];
  array2:any=[]
  radialGradient:any={}
  grapgdata: any = [
    ['us-ca', 0], ['us-or', 11], ['us-nd', 12], ['ca-sk', 13],
    ['us-mt', 14], ['us-az', 15], ['us-nv', 16], ['us-al', 47],
    ['us-nm', 18], ['us-co', 19], ['us-wy', 20], ['us-wi', 21],
    ['us-ks', 22], ['us-ne', 23], ['us-ok', 24], ['us-mi', 25],
    ['us-ak', 26], ['us-oh', 27], ['ca-bc', 1], ['ca-nu', 29],
    ['ca-nt', 30], ['ca-ab', 31], ['us-ma', 32], ['us-vt', 33],
    ['us-mn', 34], ['us-wa', 35], ['us-id', 36], ['us-ar', 37],
    ['us-tx', 38], ['us-ri', 39], ['us-fl', 40], ['us-ms', 41],
    ['us-ut', 42], ['us-nc', 43], ['us-ga', 44], ['us-va', 45],
    ['us-tn', 46], ['us-ia', 47], ['us-md', 48], ['us-de', 49],
    ['us-mo', 50], ['us-pa', 51], ['us-nj', 52], ['us-ny', 53],
    ['us-la', 54], ['us-nh', 55], ['us-me', 56], ['us-sd', 57],
    ['us-ct', 58], ['us-il', 59], ['us-in', 60], ['us-ky', 61],
    ['us-wv', 62], ['us-dc', 63], ['ca-on', 64], ['ca-qc', 65],
    ['ca-nb', 66], ['ca-ns', 67], ['ca-nl', 68], ['ca-mb', 69],
    ['us-sc', 0], ['ca-yt', 71], ['ca-pe', 72], [null, 73]
  ];

  constructor() {}
  ngOnInit(): void {
    console.log(this.grapgdata[0], 'gggg');
    this.grapgdata.map((item: any, index: any) => {
     

     this.array1.push(item);
    
     
     this.getRadius();
    
    });
    console.log(this.array1,"arr")
    throw new Error('Method not implemented.');
  }

  

  getRadius(){

    this.array1.map((item:any)=>{
     
      if (item[1] <= 25) {
        this.rad=0.4
        this.array2.push(this.rad)
        // return this.rad
      
        
      }
      else if(item[1] >= 26 && item[1]<=45){
        this.rad=0.6
        this.array2.push(this.rad)
     
      } 
      else if(item[1] >= 46 && item[1]<=60){
        this.rad=0.8
        this.array2.push(this.rad)
      
      }
      else if(item[1] >= 61 ){
        this.rad=1
        this.array2.push(this.rad)
     
      }
    
  
    })
    console.log(this.array2,"array2")
   
console.log(this.rad,"rad4")

    this.radialGradient={cx: 0.5, cy: 0.5, r:this.array2

    }
    // console.log(this.radialGradient.r,"uytuyt")
  
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  // chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];

  chartOptions: Options = {
    chart: {
      map: worldMap as any,
      type: 'heatmap',
      // height: 1000,
        // width: 500,
    },

    // title: {
    //   text: 'Corona cases in capitals of India',
    //   align: 'left',
    // },
    // subtitle: {
    //   text: 'Corona cases variation by day and hour through May 2017',
    //   align: 'left',
    // },
    xAxis: {
      tickPixelInterval: 50,
    },
    yAxis: {
      accessibility: {
        description: 'Hours in the day',
      },
      title: {
        text: null,
      },
      labels: {
        format: '{value}',
      },
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'top',
      },
    },

    colorAxis: {
      min: 5,
      max: 50,

      labels: {
        format: '{value}',
      },
      gridLineColor: {
        radialGradient: this.radialGradient,
        stops: [
          [0, '##FF0000'], // start
          [0.5, '#FFFF00'], // middle
          [1, '#00FF00'], // end
        ],
      },

      maxColor: {
        radialGradient: this.radialGradient,
        stops: [
          [0, '#FF0000'], // start
          [0.2, '#FF0000'],
          [0.4, '#FF0000'],
          [0.6, '#FFFF00'],
          [0.8, '#00FF00'], // middle
          [1, '#00FF00'], // end
        ],
      },
      minColor: {
        radialGradient: { cx: 0.1, cy: 0.1, r: 0.9 },
        stops: [
          [0, '#00FF00'], // start
          [0.2, '#00FF00'],
          [0.4, '#00FF00'],
          [0.6, '#00FF00'],
          [0.8, '#00FF00'],
          // middle
          [1, '#FF0000'], // end
        ],
      },
    },

    legend: {
      title: {
        text: 'corona case',
      },
    },
    tooltip: {
      headerFormat:
        '<span style="color:{point.color}">\u25CF</span> {point.key}:<br/>',
      pointFormat: '{point.x}  <b>{point.value}',
    },
    series: [
      {
        borderWidth: 0.1,
        borderColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#FFFF00'], // start
            [0.5, '#00DAB9'], // middle
            [1, '#FF0000'], // end
          ],
        },
        borderRadius: 0,
        type: 'map',
        name: 'Random data',
        states: {
          // hover: {
          //   color:
          //     'green'
          // },
        },
        // colsize: 24 * 521,
        dataLabels: {
          enabled: false,
          // format: "{point.name}"
        },
        enableMouseTracking: true,
        accessibility: {
          point: {
            valueDescriptionFormat: ' {point.value}.',
          },
        },

        allAreas: true,
        data: this.array1,
      },
    ],
  };
}



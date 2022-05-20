
import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
selector: 'app-piecharts',
templateUrl: './piecharts.component.html',
styleUrls: ['./piecharts.component.scss'],
})
export class PiechartsComponent implements AfterViewInit {
fromDate: any;
toDate: any;
data: any;
highchart : any
ngAfterViewInit(): void {
this.createChartPie();
throw new Error('Method not implemented.');
}
newdata: any;


// graphData: any;
arr: any;
graphData : any = 
{
  "code": "200",
  "message": "Successful",
  "BULK": {
      "January-2019": {
          "Gallon": 165.62271927227584,
          "Mode": "BULK",
          "Ship_Cnt": 121
      },
      "February-2019": {
          "Ship_Cnt": 112,
          "Mode": "BULK",
          "Gallon": 129.68853530532698
      },
      "March-2019": {
          "Ship_Cnt": 190,
          "Mode": "BULK",
          "Gallon": 126.14206524763742
      },
      "April-2019": {
          "Gallon": 151.65690857140743,
          "Mode": "BULK",
          "Ship_Cnt": 85
      },
      "May-2019": {
          "Ship_Cnt": 117,
          "Mode": "BULK",
          "Gallon": 158.02427519543042
      },
      "June-2019": {
          "Ship_Cnt": 100,
          "Mode": "BULK",
          "Gallon": 50.01945778991733
      },
      "July-2019": {
          "Ship_Cnt": 138,
          "Mode": "BULK",
          "Gallon": 165.00826308190204
      },
      "August-2019": {
          "Gallon": 78.5892706337529,
          "Mode": "BULK",
          "Ship_Cnt": 80
      },
      "September-2019": {
          "Ship_Cnt": 138,
          "Mode": "BULK",
          "Gallon": 164.519213965569
      },
      "October-2019": {
          "Gallon": 115.72416159071777,
          "Mode": "BULK",
          "Ship_Cnt": 141
      },
      "November-2019": {
          "Ship_Cnt": 48,
          "Mode": "BULK",
          "Gallon": 82.82472280711173
      },
      "December-2019": {
          "Gallon": 59.61209548785718,
          "Mode": "BULK",
          "Ship_Cnt": 58
      },
      "January-2020": {
          "Gallon": 55.69145352251234,
          "Mode": "BULK",
          "Ship_Cnt": 63
      },
      "February-2020": {
          "Ship_Cnt": 73,
          "Mode": "BULK",
          "Gallon": 49.00995739702501
      },
      "March-2020": {
          "Gallon": 153.463124471447,
          "Mode": "BULK",
          "Ship_Cnt": 96
      },
      "April-2020": {
          "Ship_Cnt": 66,
          "Mode": "BULK",
          "Gallon": 98.71755205032133
      },
      "May-2020": {
          "Gallon": 38.079393833440896,
          "Mode": "BULK",
          "Ship_Cnt": 39
      },
      "June-2020": {
          "Gallon": 23.271215853596306,
          "Mode": "BULK",
          "Ship_Cnt": 29
      },
      "July-2020": {
          "Gallon": 62.38446502406375,
          "Mode": "BULK",
          "Ship_Cnt": 52
      },
      "August-2020": {
          "Gallon": 77.82741539254498,
          "Mode": "BULK",
          "Ship_Cnt": 77
      },
      "September-2020": {
          "Ship_Cnt": 44,
          "Mode": "BULK",
          "Gallon": 47.17228409310566
      },
      "October-2020": {
          "Gallon": 0.6297593145699286,
          "Mode": "BULK",
          "Ship_Cnt": 73
      },
      "November-2020": {
          "Ship_Cnt": 48,
          "Mode": "BULK",
          "Gallon": 49.07319380579112
      },
      "December-2020": {
          "Ship_Cnt": 54,
          "Mode": "BULK",
          "Gallon": 88.67749834893573
      },
      "January-2021": {
          "Ship_Cnt": 32,
          "Mode": "BULK",
          "Gallon": 9.041736896199101
      },
      "February-2021": {
          "Gallon": 21.036960982766356,
          "Mode": "BULK",
          "Ship_Cnt": 14
      },
      "March-2021": {
          "Ship_Cnt": 27,
          "Mode": "BULK",
          "Gallon": 20.409905944100462
      },
      "April-2021": {
          "Ship_Cnt": 38,
          "Mode": "BULK",
          "Gallon": 10.535813377037549
      },
      "May-2021": {
          "Ship_Cnt": 25,
          "Mode": "BULK",
          "Gallon": 10.64987358490669
      },
      "June-2021": {
          "Ship_Cnt": 44,
          "Mode": "BULK",
          "Gallon": 22.955409107528087
      },
      "July-2021": {
          "Ship_Cnt": 26,
          "Mode": "BULK",
          "Gallon": 23.84231696325439
      },
      "August-2021": {
          "Ship_Cnt": 30,
          "Mode": "BULK",
          "Gallon": 23.7563422713514
      },
      "September-2021": {
          "Ship_Cnt": 46,
          "Mode": "BULK",
          "Gallon": 3.5660232329290116
      },
      "October-2021": {
          "Ship_Cnt": 68,
          "Mode": "BULK",
          "Gallon": 42.68769179637772
      },
      "November-2021": {
          "Gallon": 59.793015197369414,
          "Mode": "BULK",
          "Ship_Cnt": 61
      },
      "December-2021": {
          "Ship_Cnt": 27,
          "Mode": "BULK",
          "Gallon": 24.01576342128663
      },
      "January-2022": {
          "Ship_Cnt": 43,
          "Mode": "BULK",
          "Gallon": 280.77804670330823
      },
      "February-2022": {
          "Gallon": 10.982467201511666,
          "Mode": "BULK",
          "Ship_Cnt": 18
      },
      "March-2022": {
          "Ship_Cnt": 16,
          "Mode": "BULK",
          "Gallon": 13.504709838805594
      }
  },
  "INTRML": [],
  "TL": {
      "January-2019": {
          "Ship_Cnt": 183,
          "Mode": "TL"
      },
      "February-2019": {
          "Ship_Cnt": 113,
          "Mode": "TL"
      },
      "March-2019": {
          "Ship_Cnt": 120,
          "Mode": "TL"
      },
      "April-2019": {
          "Ship_Cnt": 104,
          "Mode": "TL"
      },
      "May-2019": {
          "Ship_Cnt": 167,
          "Mode": "TL"
      },
      "June-2019": {
          "Ship_Cnt": 104,
          "Mode": "TL"
      },
      "July-2019": {
          "Ship_Cnt": 107,
          "Mode": "TL"
      },
      "August-2019": {
          "Ship_Cnt": 108,
          "Mode": "TL"
      },
      "September-2019": {
          "Ship_Cnt": 139,
          "Mode": "TL"
      },
      "October-2019": {
          "Ship_Cnt": 94,
          "Mode": "TL"
      },
      "November-2019": {
          "Ship_Cnt": 55,
          "Mode": "TL"
      },
      "December-2019": {
          "Ship_Cnt": 44,
          "Mode": "TL"
      },
      "January-2020": {
          "Ship_Cnt": 96,
          "Mode": "TL"
      },
      "February-2020": {
          "Ship_Cnt": 57,
          "Mode": "TL"
      },
      "March-2020": {
          "Ship_Cnt": 125,
          "Mode": "TL"
      },
      "April-2020": {
          "Ship_Cnt": 78,
          "Mode": "TL"
      },
      "May-2020": {
          "Ship_Cnt": 32,
          "Mode": "TL"
      },
      "June-2020": {
          "Ship_Cnt": 20,
          "Mode": "TL"
      },
      "July-2020": {
          "Ship_Cnt": 41,
          "Mode": "TL"
      },
      "August-2020": {
          "Ship_Cnt": 21,
          "Mode": "TL"
      },
      "September-2020": {
          "Ship_Cnt": 51,
          "Mode": "TL"
      },
      "October-2020": {
          "Ship_Cnt": 48,
          "Mode": "TL"
      },
      "November-2020": {
          "Ship_Cnt": 38,
          "Mode": "TL"
      },
      "December-2020": {
          "Ship_Cnt": 37,
          "Mode": "TL"
      },
      "January-2021": {
          "Ship_Cnt": 18,
          "Mode": "TL"
      },
      "February-2021": {
          "Ship_Cnt": 16,
          "Mode": "TL"
      },
      "March-2021": {
          "Ship_Cnt": 12,
          "Mode": "TL"
      },
      "April-2021": {
          "Ship_Cnt": 3,
          "Mode": "TL"
      },
      "May-2021": {
          "Ship_Cnt": 4,
          "Mode": "TL"
      },
      "June-2021": {
          "Ship_Cnt": 25,
          "Mode": "TL"
      },
      "July-2021": {
          "Ship_Cnt": 18,
          "Mode": "TL"
      },
      "August-2021": {
          "Ship_Cnt": 6,
          "Mode": "TL"
      },
      "September-2021": {
          "Ship_Cnt": 1,
          "Mode": "TL"
      },
      "October-2021": {
          "Ship_Cnt": 30,
          "Mode": "TL"
      },
      "November-2021": {
          "Ship_Cnt": 46,
          "Mode": "TL"
      },
      "December-2021": {
          "Ship_Cnt": 20,
          "Mode": "TL"
      },
      "January-2022": {
          "Ship_Cnt": 3,
          "Mode": "TL"
      },
      "February-2022": {
          "Ship_Cnt": 4,
          "Mode": "TL"
      },
      "March-2022": {
          "Ship_Cnt": 14,
          "Mode": "TL"
      }
  },
  "LTL": {
      "March-2019": {
          "Ship_Cnt": 7,
          "Mode": "LTL"
      },
      "April-2019": {
          "Ship_Cnt": 11,
          "Mode": "LTL"
      },
      "June-2019": {
          "Ship_Cnt": 4,
          "Mode": "LTL"
      },
      "July-2019": {
          "Ship_Cnt": 14,
          "Mode": "LTL"
      },
      "August-2019": {
          "Ship_Cnt": 2,
          "Mode": "LTL"
      },
      "September-2019": {
          "Ship_Cnt": 19,
          "Mode": "LTL"
      },
      "October-2019": {
          "Ship_Cnt": 11,
          "Mode": "LTL"
      },
      "November-2019": {
          "Ship_Cnt": 2,
          "Mode": "LTL"
      },
      "January-2020": {
          "Ship_Cnt": 2,
          "Mode": "LTL"
      },
      "February-2020": {
          "Ship_Cnt": 3,
          "Mode": "LTL"
      },
      "March-2020": {
          "Ship_Cnt": 2,
          "Mode": "LTL"
      },
      "September-2020": {
          "Ship_Cnt": 1,
          "Mode": "LTL"
      },
      "October-2020": {
          "Ship_Cnt": 1,
          "Mode": "LTL"
      },
      "November-2020": {
          "Ship_Cnt": 4,
          "Mode": "LTL"
      },
      "December-2020": {
          "Ship_Cnt": 1,
          "Mode": "LTL"
      },
      "January-2021": {
          "Ship_Cnt": 3,
          "Mode": "LTL"
      },
      "August-2021": {
          "Ship_Cnt": 9,
          "Mode": "LTL"
      },
      "September-2021": {
          "Ship_Cnt": 3,
          "Mode": "LTL"
      },
      "October-2021": {
          "Ship_Cnt": 1,
          "Mode": "LTL"
      }
  }
}

private getRandomNumber(min: number, max: number): number {
return Math.floor(Math.random() * (max - min + 1) + min)
}

private createChartPie(): void {
let date = new Date();
const data: any[] = [];
var array1:any[]=[]
var array2:any[]=[]
var array3:any[]=[]
var newgrapgdata=this.graphData['BULK']
console.log(newgrapgdata,"newgrapgdatahhhhhhhhhhhhhh")
var sortedobj=Object.keys(newgrapgdata).map((item:any,index)=>{
  return array1.push(newgrapgdata[item].Ship_Cnt)
})
console.log(array1,"sortedobj")
var reducedata=array1.reduce((prev,curr)=>prev+curr,0)
console.log(reducedata,"reducedata")
// tl data
var newtldata=this.graphData['TL']
var sorrobj=Object.keys(newtldata).map((item:any,index)=>{
  return array2.push(newtldata[item].Ship_Cnt)

})
console.log(array2,"array2")
var tlreduceddata=array2.reduce((pre,cur)=> pre + cur,0)
console.log(tlreduceddata,"tlreduceddata")

// ltl data
var newltldata=this.graphData['LTL']
console.log(newltldata,"newltldata")
var sortltl=Object.keys(newltldata).map((item:any)=>{
return array3.push(newltldata[item].Ship_Cnt)
})
var reduecsltl=array3.reduce((pre,cur)=>pre+cur,0)
console.log(reduecsltl,"reduecsltl")



for (let i = 0; i < 5; i++) {
date.setDate(new Date().getDate() + i);
data.push({
name: `${date.getDate()}/${date.getMonth() + 1}`,
y: this.getRandomNumber(0, 1000),
});
}

const chart = Highcharts.chart('chart-pie', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Browser market shares in January, 2018'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
accessibility: {
    point: {
        valueSuffix: '%'
    }
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
    }
},
series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'BULK',
        y: 2557,

    }, {
        name: 'TL',
        y: 2202
    }, {
        name: 'LTL',
        y: 100
    }, 
    ]
}]
} as any);

}
ngOnInit() {

}

}

function records(records: any, arg1: (valid: any) => void) {
throw new Error('Function not implemented.');
}


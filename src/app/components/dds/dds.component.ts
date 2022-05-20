
import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
selector: 'app-dds',
templateUrl: './dds.component.html',
styleUrls: ['./dds.component.scss'],
})
export class DdsComponent implements AfterViewInit {
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
graphdata:any={
    "data": {
        "BULK": {
            "January-2019": {
                "OT_PU": 12100.0,
                "Transport_Mode": "BULK"
            },
            "February-2019": {
                "OT_PU": 11200.0,
                "Transport_Mode": "BULK"
            },
            "March-2019": {
                "OT_PU": 19000.0,
                "Transport_Mode": "BULK"
            },
            "April-2019": {
                "OT_PU": 8500.0,
                "Transport_Mode": "BULK"
            },
            "May-2019": {
                "OT_PU": 11700.0,
                "Transport_Mode": "BULK"
            },
            "June-2019": {
                "OT_PU": 9800.0,
                "Transport_Mode": "BULK"
            },
            "July-2019": {
                "OT_PU": 13800.0,
                "Transport_Mode": "BULK"
            },
            "August-2019": {
                "OT_PU": 8000.0,
                "Transport_Mode": "BULK"
            },
            "September-2019": {
                "OT_PU": 13800.0,
                "Transport_Mode": "BULK"
            },
            "October-2019": {
                "OT_PU": 14100.0,
                "Transport_Mode": "BULK"
            },
            "November-2019": {
                "OT_PU": 4800.0,
                "Transport_Mode": "BULK"
            },
            "December-2019": {
                "OT_PU": 5800.0,
                "Transport_Mode": "BULK"
            },
            "January-2020": {
                "OT_PU": 6300.0,
                "Transport_Mode": "BULK"
            },
            "February-2020": {
                "OT_PU": 7300.0,
                "Transport_Mode": "BULK"
            },
            "March-2020": {
                "OT_PU": 9600.0,
                "Transport_Mode": "BULK"
            },
            "April-2020": {
                "OT_PU": 6600.0,
                "Transport_Mode": "BULK"
            },
            "May-2020": {
                "OT_PU": 3900.0,
                "Transport_Mode": "BULK"
            },
            "June-2020": {
                "OT_PU": 2900.0,
                "Transport_Mode": "BULK"
            },
            "July-2020": {
                "OT_PU": 5200.0,
                "Transport_Mode": "BULK"
            },
            "August-2020": {
                "OT_PU": 7700.0,
                "Transport_Mode": "BULK"
            },
            "September-2020": {
                "OT_PU": 4400.0,
                "Transport_Mode": "BULK"
            },
            "October-2020": {
                "OT_PU": 7300.0,
                "Transport_Mode": "BULK"
            },
            "November-2020": {
                "OT_PU": 4800.0,
                "Transport_Mode": "BULK"
            },
            "December-2020": {
                "OT_PU": 5400.0,
                "Transport_Mode": "BULK"
            },
            "January-2021": {
                "OT_PU": 3200.0,
                "Transport_Mode": "BULK"
            },
            "February-2021": {
                "OT_PU": 1400.0,
                "Transport_Mode": "BULK"
            },
            "March-2021": {
                "OT_PU": 2700.0,
                "Transport_Mode": "BULK"
            },
            "April-2021": {
                "OT_PU": 3800.0,
                "Transport_Mode": "BULK"
            },
            "May-2021": {
                "OT_PU": 2500.0,
                "Transport_Mode": "BULK"
            },
            "June-2021": {
                "OT_PU": 4400.0,
                "Transport_Mode": "BULK"
            },
            "July-2021": {
                "OT_PU": 2600.0,
                "Transport_Mode": "BULK"
            },
            "August-2021": {
                "OT_PU": 3000.0,
                "Transport_Mode": "BULK"
            },
            "September-2021": {
                "OT_PU": 4600.0,
                "Transport_Mode": "BULK"
            },
            "October-2021": {
                "OT_PU": 6800.0,
                "Transport_Mode": "BULK"
            },
            "November-2021": {
                "OT_PU": 6100.0,
                "Transport_Mode": "BULK"
            },
            "December-2021": {
                "OT_PU": 2700.0,
                "Transport_Mode": "BULK"
            },
            "January-2022": {
                "OT_PU": 4300.0,
                "Transport_Mode": "BULK"
            },
            "February-2022": {
                "OT_PU": 1800.0,
                "Transport_Mode": "BULK"
            },
            "March-2022": {
                "OT_PU": 1600.0,
                "Transport_Mode": "BULK"
            }
        },
        "LTL": {
            "March-2019": {
                "OT_PU": 700.0,
                "Transport_Mode": "LTL"
            },
            "April-2019": {
                "OT_PU": 1100.0,
                "Transport_Mode": "LTL"
            },
            "June-2019": {
                "OT_PU": 400.0,
                "Transport_Mode": "LTL"
            },
            "July-2019": {
                "OT_PU": 1400.0,
                "Transport_Mode": "LTL"
            },
            "August-2019": {
                "OT_PU": 200.0,
                "Transport_Mode": "LTL"
            },
            "September-2019": {
                "OT_PU": 1900.0,
                "Transport_Mode": "LTL"
            },
            "October-2019": {
                "OT_PU": 1100.0,
                "Transport_Mode": "LTL"
            },
            "November-2019": {
                "OT_PU": 200.0,
                "Transport_Mode": "LTL"
            },
            "January-2020": {
                "OT_PU": 200.0,
                "Transport_Mode": "LTL"
            },
            "February-2020": {
                "OT_PU": 300.0,
                "Transport_Mode": "LTL"
            },
            "March-2020": {
                "OT_PU": 200.0,
                "Transport_Mode": "LTL"
            },
            "September-2020": {
                "OT_PU": 100.0,
                "Transport_Mode": "LTL"
            },
            "October-2020": {
                "OT_PU": 100.0,
                "Transport_Mode": "LTL"
            },
            "November-2020": {
                "OT_PU": 400.0,
                "Transport_Mode": "LTL"
            },
            "December-2020": {
                "OT_PU": 100.0,
                "Transport_Mode": "LTL"
            },
            "January-2021": {
                "OT_PU": 300.0,
                "Transport_Mode": "LTL"
            },
            "August-2021": {
                "OT_PU": 900.0,
                "Transport_Mode": "LTL"
            },
            "September-2021": {
                "OT_PU": 300.0,
                "Transport_Mode": "LTL"
            },
            "October-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "LTL"
            }
        },
        "TL": {
            "January-2019": {
                "OT_PU": 18300.0,
                "Transport_Mode": "TL"
            },
            "February-2019": {
                "OT_PU": 11300.0,
                "Transport_Mode": "TL"
            },
            "March-2019": {
                "OT_PU": 12000.0,
                "Transport_Mode": "TL"
            },
            "April-2019": {
                "OT_PU": 10400.0,
                "Transport_Mode": "TL"
            },
            "May-2019": {
                "OT_PU": 16700.0,
                "Transport_Mode": "TL"
            },
            "June-2019": {
                "OT_PU": 10400.0,
                "Transport_Mode": "TL"
            },
            "July-2019": {
                "OT_PU": 10700.0,
                "Transport_Mode": "TL"
            },
            "August-2019": {
                "OT_PU": 10800.0,
                "Transport_Mode": "TL"
            },
            "September-2019": {
                "OT_PU": 13900.0,
                "Transport_Mode": "TL"
            },
            "October-2019": {
                "OT_PU": 9400.0,
                "Transport_Mode": "TL"
            },
            "November-2019": {
                "OT_PU": 5500.0,
                "Transport_Mode": "TL"
            },
            "December-2019": {
                "OT_PU": 4400.0,
                "Transport_Mode": "TL"
            },
            "January-2020": {
                "OT_PU": 9600.0,
                "Transport_Mode": "TL"
            },
            "February-2020": {
                "OT_PU": 5700.0,
                "Transport_Mode": "TL"
            },
            "March-2020": {
                "OT_PU": 12500.0,
                "Transport_Mode": "TL"
            },
            "April-2020": {
                "OT_PU": 7800.0,
                "Transport_Mode": "TL"
            },
            "May-2020": {
                "OT_PU": 3200.0,
                "Transport_Mode": "TL"
            },
            "June-2020": {
                "OT_PU": 2000.0,
                "Transport_Mode": "TL"
            },
            "July-2020": {
                "OT_PU": 4100.0,
                "Transport_Mode": "TL"
            },
            "August-2020": {
                "OT_PU": 2100.0,
                "Transport_Mode": "TL"
            },
            "September-2020": {
                "OT_PU": 5100.0,
                "Transport_Mode": "TL"
            },
            "October-2020": {
                "OT_PU": 4800.0,
                "Transport_Mode": "TL"
            },
            "November-2020": {
                "OT_PU": 3800.0,
                "Transport_Mode": "TL"
            },
            "December-2020": {
                "OT_PU": 3700.0,
                "Transport_Mode": "TL"
            },
            "January-2021": {
                "OT_PU": 1800.0,
                "Transport_Mode": "TL"
            },
            "February-2021": {
                "OT_PU": 1600.0,
                "Transport_Mode": "TL"
            },
            "March-2021": {
                "OT_PU": 1200.0,
                "Transport_Mode": "TL"
            },
            "April-2021": {
                "OT_PU": 300.0,
                "Transport_Mode": "TL"
            },
            "May-2021": {
                "OT_PU": 400.0,
                "Transport_Mode": "TL"
            },
            "June-2021": {
                "OT_PU": 2500.0,
                "Transport_Mode": "TL"
            },
            "July-2021": {
                "OT_PU": 1800.0,
                "Transport_Mode": "TL"
            },
            "August-2021": {
                "OT_PU": 600.0,
                "Transport_Mode": "TL"
            },
            "September-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "TL"
            },
            "October-2021": {
                "OT_PU": 3000.0,
                "Transport_Mode": "TL"
            },
            "November-2021": {
                "OT_PU": 4600.0,
                "Transport_Mode": "TL"
            },
            "December-2021": {
                "OT_PU": 2000.0,
                "Transport_Mode": "TL"
            },
            "January-2022": {
                "OT_PU": 300.0,
                "Transport_Mode": "TL"
            },
            "February-2022": {
                "OT_PU": 400.0,
                "Transport_Mode": "TL"
            },
            "March-2022": {
                "OT_PU": 1400.0,
                "Transport_Mode": "TL"
            }
        },
        "INTRMDL": {
            "January-2019": {
                "OT_PU": 2100.0,
                "Transport_Mode": "INTRMDL"
            },
            "February-2019": {
                "OT_PU": 700.0,
                "Transport_Mode": "INTRMDL"
            },
            "April-2019": {
                "OT_PU": 900.0,
                "Transport_Mode": "INTRMDL"
            },
            "May-2019": {
                "OT_PU": 800.0,
                "Transport_Mode": "INTRMDL"
            },
            "June-2019": {
                "OT_PU": 700.0,
                "Transport_Mode": "INTRMDL"
            },
            "July-2019": {
                "OT_PU": 400.0,
                "Transport_Mode": "INTRMDL"
            },
            "August-2019": {
                "OT_PU": 2400.0,
                "Transport_Mode": "INTRMDL"
            },
            "October-2019": {
                "OT_PU": 1100.0,
                "Transport_Mode": "INTRMDL"
            },
            "December-2019": {
                "OT_PU": 200.0,
                "Transport_Mode": "INTRMDL"
            },
            "January-2020": {
                "OT_PU": 100.0,
                "Transport_Mode": "INTRMDL"
            },
            "April-2020": {
                "OT_PU": 2200.0,
                "Transport_Mode": "INTRMDL"
            },
            "May-2020": {
                "OT_PU": 1000.0,
                "Transport_Mode": "INTRMDL"
            },
            "June-2020": {
                "OT_PU": 900.0,
                "Transport_Mode": "INTRMDL"
            },
            "July-2020": {
                "OT_PU": 1200.0,
                "Transport_Mode": "INTRMDL"
            },
            "August-2020": {
                "OT_PU": 800.0,
                "Transport_Mode": "INTRMDL"
            },
            "September-2020": {
                "OT_PU": 1000.0,
                "Transport_Mode": "INTRMDL"
            },
            "November-2020": {
                "OT_PU": 1800.0,
                "Transport_Mode": "INTRMDL"
            },
            "December-2020": {
                "OT_PU": 200.0,
                "Transport_Mode": "INTRMDL"
            },
            "January-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "INTRMDL"
            },
            "February-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "INTRMDL"
            },
            "April-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "INTRMDL"
            },
            "June-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "INTRMDL"
            },
            "September-2021": {
                "OT_PU": 100.0,
                "Transport_Mode": "INTRMDL"
            },
            "December-2021": {
                "OT_PU": 300.0,
                "Transport_Mode": "INTRMDL"
            },
            "January-2022": {
                "OT_PU": 200.0,
                "Transport_Mode": "INTRMDL"
            },
            "February-2022": {
                "OT_PU": 200.0,
                "Transport_Mode": "INTRMDL"
            },
            "March-2022": {
                "OT_PU": 400.0,
                "Transport_Mode": "INTRMDL"
            }
        },
        "SECONDARY CHARGE": {}
    }
}

private getRandomNumber(min: number, max: number): number {
return Math.floor(Math.random() * (max - min + 1) + min)
}

private createChartPie(): void {
let date = new Date();
const data: any[] = [];
var array1: any[]=[]
var array2: any[]=[]
var array3: any[]=[]
var array4: any[]=[]
var newgraghdata=this.graphdata.data['BULK']
var keysdata=Object.keys(newgraghdata).map((item:any)=>{
      return  array1.push(newgraghdata[item].OT_PU)
})
var newltldata=this.graphdata.data['LTL']
var keylte=Object.keys(newltldata).map((item:any)=>{
array2.push(newltldata[item].OT_PU)
})
var newtldata=this.graphdata.data['TL']
var newkeytldata=Object.keys(newtldata).map((item:any)=>{
array3.push(newtldata[item].OT_PU)
})
var newINTRMDLdata=this.graphdata.data['INTRMDL']
var newkeynewINTRMDLdata=Object.keys(newINTRMDLdata).map((item:any)=>{
array4.push(newINTRMDLdata[item].OT_PU)
})


// var newgrapgdata=this.graphData.data.Gallon
// console.log(newgrapgdata,"newgrapgdatahhhhhhhhhhhhhh")
// var integergallon=newgrapgdata.map((item:string)=>{
// return parseFloat(item)
// // return parseFloat(item)
// })
// console.log(integergallon,"integergallon")
// // to-act-custom
// var newToAct=this.graphData.data.Tot_Act_Cst_Usd_Amt
// console.log(newToAct,"newToAct")
// var newActCust=newToAct.map((val:string)=>{
// return parseFloat(val)
// })
// console.log(newActCust,"newActCust")
// // date format

// var newdateformat=this.graphData.data.Dest_Act_Arv_Dttm
// console.log(newdateformat,"newdateformat")
// var newdate=newdateformat.sort((a:any,b:any)=>{
// var A =a.substr(3,6)
// var B=b.substr(3,6)
// return A-B
// })
// console.log(newdate,"newdate")

for (let i = 0; i < 5; i++) {
date.setDate(new Date().getDate() + i);
data.push({
name: `${date.getDate()}/${date.getMonth() + 1}`,
y: this.getRandomNumber(0, 1000),
});
}

const chart = Highcharts.chart('chart-pie', {
chart: {
type: 'area'
},
title: {
text: 'Historic and Estimated Worldwide Population Distribution by Region'
},
subtitle: {
text: 'Source: Wikipedia.org'
},
accessibility: {
point: {
valueDescriptionFormat: '{index}. {point.category}, {point.y:,.0f} millions, {point.percentage:.1f}%.'
}
},
xAxis: {
// categories: newdate,
tickmarkPlacement: 'on',
title: {
enabled: false
}
},
yAxis: {
labels: {
// format: '{value}%'
},
title: {
enabled: false
}
},
tooltip: {
pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
split: true
},
plotOptions: {
area: {
stacking: 'percent',
lineColor: '#ffffff',
lineWidth: 1,
marker: {
lineWidth: 1,
lineColor: '#ffffff'
}
}
},
series: [{
name: 'BULK',
data: array1
}, {
name: 'LTL',
data: array2
},
{
    name: 'TL',
    data: array3
    },
    {
        name: 'INTRMDL',
        data: array4
        }]
} as any);

}
ngOnInit() {

}

}

function records(records: any, arg1: (valid: any) => void) {
throw new Error('Function not implemented.');
}


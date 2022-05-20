
import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
selector: 'app-cpgs',
templateUrl: './cpgs.component.html',
styleUrls: ['./cpgs.component.scss'],
})
export class CpgsComponent implements AfterViewInit {
fromDate: any;
  toDate: any;
  data: any;
  highchart : any
ngAfterViewInit(): void {
  
  this.createChartColumn();
throw new Error('Method not implemented.');
}
newdata: any;

// graphData: any;
arr: any;
graphData : any = 

{

"data": {

    "Dest_Act_Arv_Dttm": [

        "2019-10-10 08:00:00",

        "2019-06-28 10:18:00",

        "2019-11-15 08:00:00",

        "2020-01-03 08:00:00",

        "2019-12-14 10:45:00",

        "2019-07-01 10:00:00",

        "2020-05-21 12:30:00",

        "2020-07-02 04:00:00",

        "2021-08-03 08:24:00",

        "2020-06-23 08:00:00",

        "2021-11-04 10:00:00",

        "2019-09-13 17:35:00",

        "2019-02-15 11:03:00",

        "2019-08-01 10:00:00",

        "2019-03-13 07:30:00",

        "2020-10-27 07:40:00",

        "2019-05-10 11:35:00",

        "2020-02-07 10:04:00",

        "2019-01-25 09:45:00",

        "2019-04-23 08:00:00",

        "2021-01-18 10:30:00",

        "2021-02-26 07:30:00",

        "2021-03-08 12:45:00",

        "2021-04-13 12:00:00",

        "2021-06-21 17:00:00",

        "2021-10-01 08:00:00",

        "2020-03-30 20:33:00",

        "2020-09-14 12:15:00",

        "2021-05-25 10:00:00",

        "2021-07-03 10:00:00",

        "2020-11-30 13:30:00",

        "2021-09-25 10:00:00",

        "2020-12-04 09:30:00",

        "2020-08-26 05:00:00",

        "2021-12-02 15:30:00",

        "2020-04-01 09:02:00",

        "2022-01-07 15:00:00",

        "2022-03-01 07:45:00",

        "2022-02-24 06:00:00"

    ],

    "Gallon": [

        "5812",

        "5300",

        "5812",

        "5200",

        "6000",

        "5812",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "8500",

        "5000",

        "5000",

        "5000",

        "5000",

        "5000",

        "5000",

        "6500",

        "6500",

        "6500",

        "5400",

        "6500",

        "6500",

        "5000",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500",

        "6500"

    ],

    "Tot_Act_Cst_Usd_Amt": [

        "8096.62",

        "3770.6",

        "8426.62",

        "3993.62",

        "8630.58",

        "7898.4",

        "3629.88",

        "3030.2",

        "2435.1",

        "2268.01",

        "814.68",

        "814.68",

        "1342.76",

        "1655.58",

        "1557.99",

        "5738.79",

        "2932.19",

        "1579.31",

        "1656.58",

        "2994.82",

        "3469.34",

        "2479.19",

        "1011.4",

        "2367.8",

        "2402.8",

        "1566.8",

        "2608.2",

        "3575.6",

        "4510.92",

        "6448.8",

        "3838.6",

        "3626.62",

        "8924.6",

        "5012.75",

        "899.76",

        "2962.23",

        "7723.34",

        "4137.7",

        "2892.9"

    ]

}

}



private getRandomNumber(min: number, max: number): number {
return Math.floor(Math.random() * (max - min + 1) + min)
}


private createChartColumn(): void {
  
    let date = new Date();
const data: any[] = [];
// var array1: any[]=[]
// var array2:any[]=[]
// var array3:any[]=[]
// var array4:any[]=[]
// gallon data
var newgallondata=this.graphData.data.Gallon
console.log(newgallondata,"newgallondata")
var integerTL=newgallondata.map((tl: string)=>{
   return parseInt(tl,10)
  })
  console.log(integerTL,"integerTL0000")
  // "Tot_Act_Cst_Usd_Amt"
var  newtoactusd=this.graphData.data.Tot_Act_Cst_Usd_Amt;
console.log(newtoactusd,"newtoactusd")
 var integerToAct=newtoactusd.map((ToAct: string)=>{
   return parseFloat(ToAct)

 })
 console.log(integerToAct,"integerToAct")

//  "Dest_Act_Arv_Dttm"
var dateformat=this.graphData.data.Dest_Act_Arv_Dttm;


var newDate= dateformat.sort((a:any,b:any)=>{
  var A =a.substr(0,10)
   var B=b.substr(0,10)
   return A-B
})
console.log(newDate,"newDatefgggggggggggg")

// date 2019
var startDate = new Date("2019-01-01");
var endDate = new Date("2019-12-31");

var resultProductData = newDate.filter((a: string | number | Date) => {
  var date = new Date(a);
  return (date >= startDate && date <= endDate);
});
console.log(resultProductData,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
var date2019=resultProductData
// date 2020
var startDate1 = new Date("2020-01-01");
var endDate1 = new Date("2020-12-31");

var resultProductData2 = newDate.filter((a: string | number | Date) => {
  var date = new Date(a);
  return (date >= startDate1 && date <= endDate1);
});
console.log(resultProductData2)
var date2020=resultProductData2

// date 2021
var startDate2 = new Date("2021-01-01");
var endDate2 = new Date("2021-12-31");

var resultProductData3 = newDate.filter((a: string | number | Date) => {
  var date = new Date(a);
  return (date >= startDate2 && date <= endDate2);
});
console.log(resultProductData3)
var date2021=resultProductData3
// date 2022
var startDate3 = new Date("2022-01-01");
var endDate3 = new Date("2022-12-31");

var resultProductData4 = newDate.filter((a: string | number | Date) => {
  var date = new Date(a);
  return (date >= startDate3 && date <= endDate3);
});
console.log(resultProductData4)
var date2022=resultProductData4




// let options = {year: 'numeric', month: 'long', day: 'numeric' };
// console.log(dateformat.toLocaleString("DE-de",options),"dfgfgfgfdgf")
// let newbluk=this.graphData['BULK']
// console.log(newbluk,"newbluk")
// var keysData=Object.keys(newbluk)
// console.log(keysData,"keyssssss")


// var newEnteries1=keysData.sort((a:any,b:any)=>{
//        var A=a.substr(3,6)
//     var B=b.substr(3,6)
//           return A-B
// })
// var sortedobj=Object.keys(newbluk).map((item:any,index)=>{
//        array1.push(newbluk[item].Ship_Cnt)
//     })
//            var integerBULK=array1.map((itemmss)=>{
//     return parseInt(itemmss,10)
//     })
        // tl data 
    // var newTl=this.graphData['TL']
    // let tldata=Object.keys(newTl).map((items:any,index)=>{
    //   array2.push(newTl[items].Ship_Cnt)
    //    })
    //    var integerTL=array2.map((tl)=>{
    //  return parseInt(tl,10)
    // })
    // ltl data
//        var newltl=this.graphData['LTL']
//  var ltldata=Object.keys(newltl).map((itemms:any,index)=>{
// array3.push(newltl[itemms].Ship_Cnt)
//  })
//  var integerLTL=array3.map((ltl)=>{
// return parseInt(ltl,10)
// })
// fetch value
// var fetchValue=Object.values(newbluk);
// var fetchpush=fetchValue.map((fechval:any)=>{
//        var obj:any={}
//     obj["Ship_cnt"]=fechval.Ship_Cnt;
//         obj["mode"]=fechval.Mode;
//        array4.push(obj)
// })
    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }
    this.highchart=new Chart('chart-column' as any, {
      chart: {
        type: 'column',
        height: 500,
        width: "700",
         data:date2019,
        text: 'Cube Cost, 2013-2022'
    },
      
      yAxis: {
        title: {
            text: 'Ship Count'
        },
      
    },
      xAxis: {
        categories:dateformat,
          accessibility: {
              Description: 'year '
          }
      },
      tooltip: {
        // headerFormat: `<div>Date: {point.key}</div>`,
        // pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
         data:date2019,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            
          },
        },
      },
      series: [{
        name: 'Tot_Act_Cst_Usd_Amt',
        data:integerToAct,
     
    }, {
        name: 'Gallon',
        data:integerTL,
      
    }  ],
    } as any);

 
  }
ngOnInit() {

}

}

function records(records: any, arg1: (valid: any) => void) {
    throw new Error('Function not implemented.');
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-triplechart',
  templateUrl: './triplechart.component.html',
  styleUrls: ['./triplechart.component.scss']
})
export class TriplechartComponent implements AfterViewInit {

   defaultOptions!: Highcharts.Options;
  isHighcharts = typeof Highcharts === 'object';
  
   Highcharts: typeof Highcharts = Highcharts;
   chartConstructor: string = 'chart';
   chartOptions: Highcharts.Options = {};

 chart : any
 

 graphData : any = {
  "BULK": {
  "01-2019": {
  "Ship_Cnt": 2694,
  "Mode": "BULK"
  },
  "01-2020": {
  "Ship_Cnt": 2513,
  "Mode": "BULK"
  },
  "01-2021": {
  "Ship_Cnt": 1917,
  "Mode": "BULK"
  },
  "01-2022": {
  "Ship_Cnt": 2128,
  "Mode": "BULK"
  },
  "01-2018": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "10-2019": {
  "Ship_Cnt": 2550,
  "Mode": "BULK"
  },
  "10-2020": {
  "Ship_Cnt": 2129,
  "Mode": "BULK"
  },
  "10-2021": {
  "Ship_Cnt": 2068,
  "Mode": "BULK"
  },
  "10-2018": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "11-2019": {
  "Ship_Cnt": 2108,
  "Mode": "BULK"
  },
  "11-2020": {
  "Ship_Cnt": 1769,
  "Mode": "BULK"
  },
  "11-2021": {
  "Ship_Cnt": 1870,
  "Mode": "BULK"
  },
  "11-2018": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "12-2019": {
  "Ship_Cnt": 2483,
  "Mode": "BULK"
  },
  "12-2020": {
  "Ship_Cnt": 1877,
  "Mode": "BULK"
  },
  "12-2021": {
  "Ship_Cnt": 2118,
  "Mode": "BULK"
  },
  "12-2018": {
  "Ship_Cnt": 63,
  "Mode": "BULK"
  },
  "12-2022": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "02-2019": {
  "Ship_Cnt": 2217,
  "Mode": "BULK"
  },
  "02-2020": {
  "Ship_Cnt": 2015,
  "Mode": "BULK"
  },
  "02-2021": {
  "Ship_Cnt": 1723,
  "Mode": "BULK"
  },
  "02-2022": {
  "Ship_Cnt": 2003,
  "Mode": "BULK"
  },
  "03-2019": {
  "Ship_Cnt": 2414,
  "Mode": "BULK"
  },
  "03-2020": {
  "Ship_Cnt": 2058,
  "Mode": "BULK"
  },
  "03-2021": {
  "Ship_Cnt": 2335,
  "Mode": "BULK"
  },
  "03-2022": {
  "Ship_Cnt": 2015,
  "Mode": "BULK"
  },
  "04-2019": {
  "Ship_Cnt": 2738,
  "Mode": "BULK"
  },
  "04-2020": {
  "Ship_Cnt": 1291,
  "Mode": "BULK"
  },
  "04-2021": {
  "Ship_Cnt": 1920,
  "Mode": "BULK"
  },
  "05-2019": {
  "Ship_Cnt": 2723,
  "Mode": "BULK"
  },
  "05-2020": {
  "Ship_Cnt": 1273,
  "Mode": "BULK"
  },
  "05-2021": {
  "Ship_Cnt": 2016,
  "Mode": "BULK"
  },
  "06-2019": {
  "Ship_Cnt": 2191,
  "Mode": "BULK"
  },
  "06-2020": {
  "Ship_Cnt": 1765,
  "Mode": "BULK"
  },
  "06-2021": {
  "Ship_Cnt": 1963,
  "Mode": "BULK"
  },
  "06-2017": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "07-2019": {
  "Ship_Cnt": 2484,
  "Mode": "BULK"
  },
  "07-2020": {
  "Ship_Cnt": 2040,
  "Mode": "BULK"
  },
  "07-2021": {
  "Ship_Cnt": 1889,
  "Mode": "BULK"
  },
  "07-2018": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "08-2019": {
  "Ship_Cnt": 2502,
  "Mode": "BULK"
  },
  "08-2020": {
  "Ship_Cnt": 1853,
  "Mode": "BULK"
  },
  "08-2021": {
  "Ship_Cnt": 2035,
  "Mode": "BULK"
  },
  "08-2018": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "08-2013": {
  "Ship_Cnt": "1",
  "Mode": "BULK"
  },
  "09-2019": {
  "Ship_Cnt": 2318,
  "Mode": "BULK"
  },
  "09-2020": {
  "Ship_Cnt": 2049,
  "Mode": "BULK"
  },
  "09-2021": {
  "Ship_Cnt": 1927,
  "Mode": "BULK"
  }
  },
  "TL": {
  "01-2019": {
  "Ship_Cnt": 2330,
  "Mode": "TL"
  },
  "01-2020": {
  "Ship_Cnt": 2189,
  "Mode": "TL"
  },
  "01-2021": {
  "Ship_Cnt": 2025,
  "Mode": "TL"
  },
  "01-2022": {
  "Ship_Cnt": 1792,
  "Mode": "TL"
  },
  "01-2018": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "01-2016": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "10-2019": {
  "Ship_Cnt": 2553,
  "Mode": "TL"
  },
  "10-2020": {
  "Ship_Cnt": 2124,
  "Mode": "TL"
  },
  "10-2021": {
  "Ship_Cnt": 1850,
  "Mode": "TL"
  },
  "10-2000": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "10-2022": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "10-2018": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "10-2002": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "11-2019": {
  "Ship_Cnt": 1971,
  "Mode": "TL"
  },
  "11-2020": {
  "Ship_Cnt": 2065,
  "Mode": "TL"
  },
  "11-2021": {
  "Ship_Cnt": 1535,
  "Mode": "TL"
  },
  "12-2019": {
  "Ship_Cnt": 2089,
  "Mode": "TL"
  },
  "12-2020": {
  "Ship_Cnt": 2122,
  "Mode": "TL"
  },
  "12-2021": {
  "Ship_Cnt": 1842,
  "Mode": "TL"
  },
  "12-2018": {
  "Ship_Cnt": 76,
  "Mode": "TL"
  },
  "12-2016": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "02-2019": {
  "Ship_Cnt": 2559,
  "Mode": "TL"
  },
  "02-2020": {
  "Ship_Cnt": 1826,
  "Mode": "TL"
  },
  "02-2021": {
  "Ship_Cnt": 1745,
  "Mode": "TL"
  },
  "02-2022": {
  "Ship_Cnt": 1672,
  "Mode": "TL"
  },
  "02-2000": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "03-2019": {
  "Ship_Cnt": 2906,
  "Mode": "TL"
  },
  "03-2020": {
  "Ship_Cnt": 2345,
  "Mode": "TL"
  },
  "03-2021": {
  "Ship_Cnt": 2447,
  "Mode": "TL"
  },
  "03-2022": {
  "Ship_Cnt": 1799,
  "Mode": "TL"
  },
  "03-2009": {
  "Ship_Cnt": "1",
  "Mode": "TL"
  },
  "04-2019": {
  "Ship_Cnt": 2691,
  "Mode": "TL"
  },
  "04-2020": {
  "Ship_Cnt": 1421,
  "Mode": "TL"
  },
  "04-2021": {
  "Ship_Cnt": 1962,
  "Mode": "TL"
  },
  "05-2019": {
  "Ship_Cnt": 2396,
  "Mode": "TL"
  },
  "05-2020": {
  "Ship_Cnt": 1332,
  "Mode": "TL"
  },
  "05-2021": {
  "Ship_Cnt": 1907,
  "Mode": "TL"
  },
  "06-2019": {
  "Ship_Cnt": 2293,
  "Mode": "TL"
  },
  "06-2020": {
  "Ship_Cnt": 1857,
  "Mode": "TL"
  },
  "06-2021": {
  "Ship_Cnt": 2039,
  "Mode": "TL"
  },
  "07-2019": {
  "Ship_Cnt": 2466,
  "Mode": "TL"
  },
  "07-2020": {
  "Ship_Cnt": 1940,
  "Mode": "TL"
  },
  "07-2021": {
  "Ship_Cnt": 2037,
  "Mode": "TL"
  },
  "08-2019": {
  "Ship_Cnt": 2261,
  "Mode": "TL"
  },
  "08-2020": {
  "Ship_Cnt": 1689,
  "Mode": "TL"
  },
  "08-2021": {
  "Ship_Cnt": 1991,
  "Mode": "TL"
  },
  "09-2019": {
  "Ship_Cnt": 2223,
  "Mode": "TL"
  },
  "09-2020": {
  "Ship_Cnt": 2022,
  "Mode": "TL"
  },
  "09-2021": {
  "Ship_Cnt": 1925,
  "Mode": "TL"
  }
  },
  "LTL": {
  "01-2019": {
  "Ship_Cnt": 1283,
  "Mode": "LTL"
  },
  "01-2020": {
  "Ship_Cnt": 1263,
  "Mode": "LTL"
  },
  "01-2021": {
  "Ship_Cnt": 1000,
  "Mode": "LTL"
  },
  "01-2022": {
  "Ship_Cnt": 1204,
  "Mode": "LTL"
  },
  "10-2019": {
  "Ship_Cnt": 1555,
  "Mode": "LTL"
  },
  "10-2020": {
  "Ship_Cnt": 1340,
  "Mode": "LTL"
  },
  "10-2021": {
  "Ship_Cnt": 1237,
  "Mode": "LTL"
  },
  "10-2018": {
  "Ship_Cnt": 2,
  "Mode": "LTL"
  },
  "11-2019": {
  "Ship_Cnt": 1258,
  "Mode": "LTL"
  },
  "11-2020": {
  "Ship_Cnt": 1141,
  "Mode": "LTL"
  },
  "11-2021": {
  "Ship_Cnt": 1292,
  "Mode": "LTL"
  },
  "11-2018": {
  "Ship_Cnt": 3,
  "Mode": "LTL"
  },
  "12-2019": {
  "Ship_Cnt": 1214,
  "Mode": "LTL"
  },
  "12-2020": {
  "Ship_Cnt": 1360,
  "Mode": "LTL"
  },
  "12-2021": {
  "Ship_Cnt": 1233,
  "Mode": "LTL"
  },
  "12-2018": {
  "Ship_Cnt": 74,
  "Mode": "LTL"
  },
  "02-2019": {
  "Ship_Cnt": 1090,
  "Mode": "LTL"
  },
  "02-2021": {
  "Ship_Cnt": 1027,
  "Mode": "LTL"
  },
  "02-2022": {
  "Ship_Cnt": 1083,
  "Mode": "LTL"
  },
  "02-2020": {
  "Ship_Cnt": 1141,
  "Mode": "LTL"
  },
  "03-2019": {
  "Ship_Cnt": 1425,
  "Mode": "LTL"
  },
  "03-2020": {
  "Ship_Cnt": 1192,
  "Mode": "LTL"
  },
  "03-2021": {
  "Ship_Cnt": 1580,
  "Mode": "LTL"
  },
  "03-2022": {
  "Ship_Cnt": 1191,
  "Mode": "LTL"
  },
  "04-2019": {
  "Ship_Cnt": 1425,
  "Mode": "LTL"
  },
  "04-2020": {
  "Ship_Cnt": 843,
  "Mode": "LTL"
  },
  "04-2021": {
  "Ship_Cnt": 1393,
  "Mode": "LTL"
  },
  "05-2019": {
  "Ship_Cnt": 1492,
  "Mode": "LTL"
  },
  "05-2020": {
  "Ship_Cnt": 869,
  "Mode": "LTL"
  },
  "05-2021": {
  "Ship_Cnt": 1078,
  "Mode": "LTL"
  },
  "06-2020": {
  "Ship_Cnt": 1116,
  "Mode": "LTL"
  },
  "06-2021": {
  "Ship_Cnt": 1181,
  "Mode": "LTL"
  },
  "06-2019": {
  "Ship_Cnt": 1178,
  "Mode": "LTL"
  },
  "07-2019": {
  "Ship_Cnt": 1405,
  "Mode": "LTL"
  },
  "07-2020": {
  "Ship_Cnt": 1165,
  "Mode": "LTL"
  },
  "07-2021": {
  "Ship_Cnt": 1241,
  "Mode": "LTL"
  },
  "07-2018": {
  "Ship_Cnt": "1",
  "Mode": "LTL"
  },
  "08-2019": {
  "Ship_Cnt": 1427,
  "Mode": "LTL"
  },
  "08-2020": {
  "Ship_Cnt": 1026,
  "Mode": "LTL"
  },
  "08-2021": {
  "Ship_Cnt": 1238,
  "Mode": "LTL"
  },
  "08-2018": {
  "Ship_Cnt": 2,
  "Mode": "LTL"
  },
  "09-2020": {
  "Ship_Cnt": 1209,
  "Mode": "LTL"
  },
  "09-2021": {
  "Ship_Cnt": 1163,
  "Mode": "LTL"
  },
  "09-2019": {
  "Ship_Cnt": 1421,
  "Mode": "LTL"
  }
  }
  };
  
  constructor() { }


  ngAfterViewInit(): void {
    this.createChartLine()
    throw new Error('Method not implemented.');
  }
private createChartLine():void{
  let date = new Date();
const data: any[] = [];
var array1: any[]=[]
var array2:any[]=[]
var array3:any[]=[]
var array4:any[]=[]
let newbluk=this.graphData['BULK']
console.log(newbluk,"newbluk")
var keysData=Object.keys(newbluk)
console.log(keysData,"keyssssss")


let newEnteries1=keysData.sort((a:any,b:any)=>{
       var A=a.substr(3,6)
    var B=b.substr(3,6)
          return A-B
})


console.log(newEnteries1,"newEntrieswwwwwwwwwwwwwwwwwwwwwwwww")

var startDate = new Date("01-2019");
var endDate = new Date("12-2019");

var resultProductData = newEnteries1.filter((a:any,index:any,arr:any) => {
  // console.log(a,"aaaaaaaaaaaaaaa")

  // console.log(date,"datttttttttttttttttttttttt")
    arr[index] >= startDate && arr[index] <= endDate;
});
console.log(resultProductData,"resultProductDate")

var sortedobj=Object.keys(newbluk).map((item:any,index)=>{
       array1.push(newbluk[item].Ship_Cnt)
    })
       
    var integerBULK=array1.map((itemmss)=>{
    return parseInt(itemmss,10)
    })
 
    // tl data 
    var newTl=this.graphData['TL']
    console.log(newTl,"")
    let tldata=Object.keys(newTl).map((items:any,index)=>{
      array2.push(newTl[items].Ship_Cnt)
       })
       var integerTL=array2.map((tl)=>{
     return parseInt(tl,10)
    })
    // ltl data
    console.log(integerTL.slice(0,7),"integerTL")
    var newltl=this.graphData['LTL']
 var ltldata=Object.keys(newltl).map((itemms:any,index)=>{
array3.push(newltl[itemms].Ship_Cnt)
 })
 console.log(array3,"array3")
var integerLTL=array3.map((ltl)=>{
return parseInt(ltl,10)
})

  const chart= Highcharts.chart({
    chart: {
        renderTo: 'container',
        type: 'coloum'
    },
    title: {
      text: 'Stacked column chart'
  },
  xAxis: {
    // categories: date2019
},
yAxis: {
 
  title: {
      text: 'Total fruit consumption'
  },
 
},
legend: {
  align: 'right',
  x: -30,
  verticalAlign: 'top',
  y: 25,
 
  // backgroundColor:
  //     Highcharts.defaultOptions.legend.backgroundColor || 'white',
  // borderColor: '#CCC',
  // borderWidth: 1,
  // shadow: false
},
tooltip: {
  headerFormat: '<b>{point.x}</b><br/>',
  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
  column: {
      stacking: 'normal',
     
  }
},
series: [{
  name: 'BULK',
  type: 'column',
  data: integerBULK
}, {
  name: 'TL',
  type: 'column',
  data:integerTL
}, {
  name: 'LTL',
  type: 'column',
  data: integerLTL
}]
});
}
 
}

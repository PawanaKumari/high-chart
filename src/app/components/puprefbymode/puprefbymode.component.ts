
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';


@Component({
  selector: 'app-puprefbymode',
  templateUrl: './puprefbymode.component.html',
  styleUrls: [ './puprefbymode.component.scss' ]
  })
  export class PuprefbymodeComponent   implements AfterViewInit{
fromDate: any;
 isHighcharts = typeof Highcharts === 'object';
  title = 'UnivHighCharts';
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};
toDate: any;
data: any;
chart : any

newdata: any;
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

ngAfterViewInit(): void {
  this.createChartLine();
 
throw new Error('Method not implemented.');
}
// graphData: any;
arr: any;
private createChartLine(): void {
  var array2:any[]=[]
var array3:any[]=[]
  console.log(this.graphData['BULK'],"graphdataaaaaaaaaaaaa")
  var newbulkdata=this.graphData['BULK']
  var shipcntdata=Object.keys(newbulkdata).map((item:any)=>{
array2.push(newbulkdata[item].Ship_Cnt)

  })
  var bulkintval=array2.map((item:any)=>{
return parseInt(item,10)
  })
  console.log(bulkintval,"array2222222222222")
  // tl value
  var tlvalue=this.graphData['TL']
  var tlshipcount=Object.keys(tlvalue).map((item:any)=>{
array3.push(tlvalue[item].Ship_Cnt)
  })
  var tlship=array3.map((item)=>{
return parseInt(item,10)
  })
  console.log(tlship,"tlship")
const chart = Highcharts.chart('container', {
  chart: {
      zoomType: 'xy'
  },
  title: {
      text: 'Average Monthly Temperature and Rainfall in Tokyo'
  },
  subtitle: {
      text: 'Source: WorldClimate.com'
  },
  xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
  }],
  yAxis: [{ // Primary yAxis
      labels: {
          format: '{value}°C',
          // style: {
          //     color: Highcharts.getOptions().colors[1]
          // }
      },
      title: {
          text: 'Temperature',
          // style: {
          //     color: Highcharts.getOptions().colors[1]
          // }
      }
  }, { // Secondary yAxis
      title: {
          text: 'Rainfall',
          // style: {
          //     color: Highcharts.getOptions().colors[0]
          // }
      },
      labels: {
          format: '{value} mm',
          // style: {
          //     color: Highcharts.getOptions().colors[0]
          // }
      },
      opposite: true
  }],
  tooltip: {
      shared: true
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      // backgroundColor:
      //     Highcharts.defaultOptions.legend.backgroundColor || // theme
      //     'rgba(255,255,255,0.25)'
  },
  series: [{
      name: 'BULK',
      type: 'column',
      yAxis: 1,
      data: bulkintval,
      tooltip: {
          valueSuffix: ' mm'
      }

  }, {
      name: 'TL',
      type: 'spline',
      data: tlship,
      tooltip: {
          valueSuffix: '°C'
      }
  }]
});
}

  }


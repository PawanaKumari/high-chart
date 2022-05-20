import { Component, OnInit } from '@angular/core';

import Highcharts from "highcharts/highmaps";
import { Options } from "highcharts";
import worldMap from "@highcharts/map-collection/custom/usa-and-canada.geo.json";

@Component({
  selector: 'app-finalmap',
  templateUrl: './finalmap.component.html',
  styleUrls: ['./finalmap.component.scss']
})
export class FinalmapComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
 finelarray:any[]=[]
  chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];
   data={
    "data": [
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "SO",
            "gallonSum": 2110797.657142853,
            "Percentage": 0.18
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "DG",
            "gallonSum": 1763079.542857143,
            "Percentage": 0.15
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "GJ",
            "gallonSum": 777318.0000000002,
            "Percentage": 0.07
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "BJ",
            "gallonSum": 4905605.485714304,
            "Percentage": 0.43
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NC",
            "gallonSum": 14770034.228571394,
            "Percentage": 1.29
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "TX",
            "gallonSum": 201411006.22857618,
            "Percentage": 17.58
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "FL",
            "gallonSum": 28025772.05714247,
            "Percentage": 2.45
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "GA",
            "gallonSum": 28039157.88571457,
            "Percentage": 2.45
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MS",
            "gallonSum": 6558448.914285732,
            "Percentage": 0.57
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "IA",
            "gallonSum": 16005402.171428502,
            "Percentage": 1.4
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "KY",
            "gallonSum": 67764539.65714271,
            "Percentage": 5.91
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "VA",
            "gallonSum": 13156495.657142833,
            "Percentage": 1.15
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "WY",
            "gallonSum": 3338225.1428571492,
            "Percentage": 0.29
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "AL",
            "gallonSum": 25590880.799999993,
            "Percentage": 2.23
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "AR",
            "gallonSum": 6224697.371428494,
            "Percentage": 0.54
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "IN",
            "gallonSum": 19419930.80000028,
            "Percentage": 1.7
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "KS",
            "gallonSum": 8982896.685714277,
            "Percentage": 0.78
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "LA",
            "gallonSum": 35812660.17142874,
            "Percentage": 3.13
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "SC",
            "gallonSum": 23461376.8000006,
            "Percentage": 2.05
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "CA",
            "gallonSum": 142710969.77142775,
            "Percentage": 12.46
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "WA",
            "gallonSum": 22209388.00000001,
            "Percentage": 1.94
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "ID",
            "gallonSum": 3380496.0000000014,
            "Percentage": 0.3
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "OR",
            "gallonSum": 61877063.02857039,
            "Percentage": 5.4
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "AZ",
            "gallonSum": 23236872.79999981,
            "Percentage": 2.03
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MT",
            "gallonSum": 3761963.632138458,
            "Percentage": 0.33
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MI",
            "gallonSum": 9857956.51428569,
            "Percentage": 0.86
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "PA",
            "gallonSum": 30394874.68571434,
            "Percentage": 2.65
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "WV",
            "gallonSum": 4177280.114285694,
            "Percentage": 0.36
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "OH",
            "gallonSum": 12299371.999999998,
            "Percentage": 1.07
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NJ",
            "gallonSum": 10388372.971428575,
            "Percentage": 0.91
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "TN",
            "gallonSum": 17458032.000000056,
            "Percentage": 1.52
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "IL",
            "gallonSum": 20239908.514285803,
            "Percentage": 1.77
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "SD",
            "gallonSum": 2268257.1428571497,
            "Percentage": 0.2
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "UT",
            "gallonSum": 7816779.828571457,
            "Percentage": 0.68
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NY",
            "gallonSum": 4316812.457142878,
            "Percentage": 0.38
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NV",
            "gallonSum": 13492646.000000032,
            "Percentage": 1.18
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "NL",
            "gallonSum": 3678834.7428571573,
            "Percentage": 0.32
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "TM",
            "gallonSum": 568805.714285714,
            "Percentage": 0.05
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "VL",
            "gallonSum": 1118918.3999999932,
            "Percentage": 0.1
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "EM",
            "gallonSum": 3495917.5999999964,
            "Percentage": 0.31
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "QA",
            "gallonSum": 441696.9142857161,
            "Percentage": 0.04
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NM",
            "gallonSum": 8173824.057142866,
            "Percentage": 0.71
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "OK",
            "gallonSum": 14708294.285714302,
            "Percentage": 1.28
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "CO",
            "gallonSum": 16237283.999999933,
            "Percentage": 1.42
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MN",
            "gallonSum": 15397187.428571366,
            "Percentage": 1.34
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "DF",
            "gallonSum": 3677880.4571429663,
            "Percentage": 0.32
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "WI",
            "gallonSum": 10562377.599999975,
            "Percentage": 0.92
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "RI",
            "gallonSum": 7865297.599999995,
            "Percentage": 0.69
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MA",
            "gallonSum": 2056089.8857142504,
            "Percentage": 0.18
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MD",
            "gallonSum": 2572631.485714283,
            "Percentage": 0.22
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "SI",
            "gallonSum": 554138.2857142801,
            "Percentage": 0.05
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "SL",
            "gallonSum": 645890.5142857099,
            "Percentage": 0.06
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "YC",
            "gallonSum": 140896.685714284,
            "Percentage": 0.01
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "CU",
            "gallonSum": 283290.971428566,
            "Percentage": 0.02
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "BS",
            "gallonSum": 463159.542857142,
            "Percentage": 0.04
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "AB",
            "gallonSum": 41236880.74285705,
            "Percentage": 3.6
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "MO",
            "gallonSum": 9617722.571428616,
            "Percentage": 0.84
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "BC",
            "gallonSum": 42022601.59999972,
            "Percentage": 3.67
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "ON",
            "gallonSum": 26964497.314285837,
            "Percentage": 2.35
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "SK",
            "gallonSum": 2483223.8571428685,
            "Percentage": 0.22
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "MB",
            "gallonSum": 7218313.314285724,
            "Percentage": 0.63
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "CI",
            "gallonSum": 1093272.0000000068,
            "Percentage": 0.1
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "CH",
            "gallonSum": 188662.40000000197,
            "Percentage": 0.02
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "CP",
            "gallonSum": 331295.0857142861,
            "Percentage": 0.03
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "OA",
            "gallonSum": 66479.314285714,
            "Percentage": 0.01
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "TA",
            "gallonSum": 482923.6571428558,
            "Percentage": 0.04
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "AG",
            "gallonSum": 141762.74285714404,
            "Percentage": 0.01
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "HG",
            "gallonSum": 2296981.714285709,
            "Percentage": 0.2
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "JA",
            "gallonSum": 910261.714285704,
            "Percentage": 0.08
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "NA",
            "gallonSum": 30400.914285714,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "QC",
            "gallonSum": 8077490.930000034,
            "Percentage": 0.71
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "NL",
            "gallonSum": 452897.314285716,
            "Percentage": 0.04
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "NB",
            "gallonSum": 117567.08571428401,
            "Percentage": 0.01
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "ND",
            "gallonSum": 5856133.142857149,
            "Percentage": 0.51
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "HI",
            "gallonSum": 2170677.714285721,
            "Percentage": 0.19
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "PU",
            "gallonSum": 30302.62857143,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "MH",
            "gallonSum": 29445.714285714,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NE",
            "gallonSum": 1902092.2285714166,
            "Percentage": 0.17
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "DE",
            "gallonSum": 177725.60000001016,
            "Percentage": 0.02
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "NH",
            "gallonSum": 24032.45714287402,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "ME",
            "gallonSum": 744060.4571428496,
            "Percentage": 0.06
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "AK",
            "gallonSum": 587.4285714279999,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "NF",
            "gallonSum": 667.2,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "CT",
            "gallonSum": 219945.6000000061,
            "Percentage": 0.02
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "VT",
            "gallonSum": 8432.000000002,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "YT",
            "gallonSum": 27290.057142858,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "",
            "gallonSum": 2195.2200000000003,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "CAN",
            "Dest_Loc_State": "NS",
            "gallonSum": 10560.0,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "VE",
            "gallonSum": 19312.228571428,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "QR",
            "gallonSum": 30392.457142855998,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "CL",
            "gallonSum": 19206.171428572,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "MEX",
            "Dest_Loc_State": "CM",
            "gallonSum": 10160.228571428,
            "Percentage": 0.0
        },
        {
            "Dest_Loc_Country": "USA",
            "Dest_Loc_State": "BJ",
            "gallonSum": 5112.0,
            "Percentage": 0.0
        }
    ],
    
}


  constructor() { }


  ngOnInit(): void {
var newdata=(this.data['data'])
var usadata=newdata.map((item:any,index:any)=>{

delete item.gallonSum
    return item
})
console.log(usadata,"usadata")
var valueee=usadata.map(Object.values)
console.log(valueee,"valueee")
for(var row=0; row<valueee.length; row++) {
    for(var column=0;column<valueee[row].length;column++) {
           if(valueee[row][0]==='USA') {
            valueee[row][0] = "US";
           } else if(valueee[row][0]==='CAN'){ 
            valueee[row][0] = "CA";
           }
           else if(valueee[row][0]==='MAX'){
            valueee[row][0] = "MX";  
           }
  
}
}
var slicevalue=valueee.map((item:any)=>{
    return item.slice(2,3)
    })
 

var perarray=valueee.map((item:any)=>{
return item.slice(0,2)
})

var joinval=perarray.map((item:any)=>{
  return item.join('-')

})

var lowercase=joinval.map((item:any)=>{
return item.toLowerCase()
})

var  newArr: any[] = [];
while(lowercase.length) newArr.push(lowercase.splice(0,1));



var length=newArr.length
for(let i = 0;i<=length-1;i++){
  var subarray: any[]=[]
  subarray.push(newArr[i][0])
  subarray.push(slicevalue[i][0])
  
  this.finelarray.push(subarray)

}

  }
  chartOptions: Options = {
    chart: {
      map: worldMap as any
    },
    title: {
      text: "Highmaps basic demo"
    },
    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        allAreas: false,
        data : this.finelarray
      }
    ]
  };


}

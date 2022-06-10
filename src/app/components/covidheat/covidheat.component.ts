import { Component, OnInit, Renderer2 } from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import { Options } from 'highcharts';
import worldMap from '@highcharts/map-collection/countries/in/in-all.geo.json';

declare let h337: any;

const MOUSE_CIRCLE_RADIUS = 25;
const MOUSE_CIRCLE_TRANSL_RADIUS = 10;
const HEATMAP_HEIGHT = 400;
const HEATMAP_WIDTH = 225;
@Component({
  selector: 'app-covidheat',
  templateUrl: './covidheat.component.html',
  styleUrls: ['./covidheat.component.scss'],
})
export class CovidheatComponent implements OnInit {
  gradientCfg = {
    0.15: '#6ad180', // green
    0.25: '#7cd573',
    0.35: '#90d865',
    0.45: '#a4da57',
    0.55: '#badc48',
    0.65: '#c9cf35',
    0.75: '#d6c226',
    0.8: '#e2b41c',
    0.85: '#e2961d',
    0.9: '#dd7826',
    0.95: '#d25c30',
    1.0: '#c24039', // highest red
  };
  heatmap: any = null;
  // coordinates: Array<Coordinate> = [];
  // selectedCoordinates: Array<Coordinate> = [];
  heatmapContainer: HTMLElement | undefined;
  tooltip: HTMLElement | undefined;
  isMouseInsideHeatmap = false;
  mouseCircle: HTMLElement | undefined;
  xMinCoord: number | undefined;
  yMinCoord: number | undefined;
  xMaxCoord: number | undefined;
  yMaxCoord: number | undefined;

  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const heatmapConfig = {
      container: document.querySelector('#heatmapContainer'),
      opacity: 0.8,
      radius: 7,
      visible: true,
      gradient: this.gradientCfg,
      backgroundColor: 'inherit',
    };
    this.heatmap = h337.create(heatmapConfig);
    // this.heatmap.setData({ max: 30, data: this.coordinates });

    // this.heatmapContainer = document.querySelector('#heatmapContainer');
    this.tooltip = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltip, 'heatmap-tooltip');
    this.renderer.setStyle(this.tooltip, 'display', 'none');
    this.renderer.setStyle(this.tooltip, 'transform', 'translate(39px, 489px)');
    this.mouseCircle = this.renderer.createElement('div');
    this.renderer.addClass(this.mouseCircle, 'mouseCircle');
    this.renderer.setStyle(this.mouseCircle, 'display', 'none');
    this.renderer.setStyle(
      this.mouseCircle,
      'transform',
      'translate(39px, 489px)'
    );
    this.renderer.appendChild(this.heatmapContainer, this.tooltip);
    this.renderer.appendChild(this.heatmapContainer, this.mouseCircle);
    throw new Error('Method not implemented.');
  }
  updateTooltip(x: number, y: number): void {
    const transl =
      'translate(' +
      (x + MOUSE_CIRCLE_TRANSL_RADIUS) +
      'px, ' +
      (y + MOUSE_CIRCLE_TRANSL_RADIUS) +
      'px)';
    this.renderer.setStyle(this.tooltip, 'transform', transl);
    this.renderer.setProperty(
      this.tooltip,
      'innerText',
      'Click to get the coordinates inside the circle'
    );
    // mouse circle code
    // const itemRect = this.mouseCircle.getBoundingClientRect();
    // const xPos = x - itemRect.width / 2;
    // const yPos = y - itemRect.height / 2;
    this.renderer.setStyle(
      this.mouseCircle,
      'transform',
      'translate3d(' + x + 'px, ' + y + 'px, 0)'
    );
  }

  heatmapMouseMove(ev: any): void {
    if (!this.isMouseInsideHeatmap) {
      return;
    }
    const x = ev.layerX;
    const y = ev.layerY;
    // if going out of the heatmap container then exit
    if (x < 0 || y < 0 || x > HEATMAP_WIDTH || y > HEATMAP_HEIGHT) {
      this.heatmapMouseOut();
      return;
    }
    this.renderer.setStyle(this.tooltip, 'display', 'block');
    this.renderer.setStyle(this.mouseCircle, 'display', 'block');
    this.updateTooltip(x, y);
  }

  heatmapMouseOut(): void {
    this.isMouseInsideHeatmap = false;
    this.renderer.setStyle(this.tooltip, 'display', 'none');
    this.renderer.setStyle(this.mouseCircle, 'display', 'none');
  }

  heatmapMouseEnter(): void {
    this.isMouseInsideHeatmap = true;
  }

  mouseCircleClick(evt: any): void {
    const radiusSquared = MOUSE_CIRCLE_RADIUS * MOUSE_CIRCLE_RADIUS;
    const circlePositionsXY = new Set<string>();
    const xcord = evt.layerX;
    const ycord = evt.layerY;
    const xExtreme = xcord + MOUSE_CIRCLE_RADIUS;
    const yExtreme = ycord + MOUSE_CIRCLE_RADIUS;

    // finding all positions around this circle
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  // chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];

  chartOptions: Options = {
    chart: {
      map: worldMap as any,
      type: 'heatmap',
    },

    title: {
      text: 'Corona cases in capitals of India',
      align: 'left',
    },
    subtitle: {
      text: 'Corona cases variation by day and hour through May 2017',
      align: 'left',
    },
    xAxis: {
      tickPixelInterval: 50,
      // min: Date.UTC(2017, 4, 1),
      // max: Date.UTC(2017, 4, 30)
    },
    yAxis: {
      accessibility: {
        description: 'Hours in the day',
      },
      title: {
        text: null,
      },
      labels: {
        format: '{value}:00',
      },
      minPadding: 1,
      maxPadding: 10,
      // startOnTick: false,
      // endOnTick: false,
      // tickPositions: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24],
      tickWidth: 1,
      min: 10,
      max: 23,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },

    colorAxis: {
      min: 1,
      max: 100,
      
      labels: {
        format: '{value}',
      },
      stops: [
        [0, 'rgba(0, 255, 255, 0)'],
        [0.1, 'rgba(0, 255, 255, 1)'],
        [0.2, 'rgba(0, 191, 255, 1)'],
        [0.3,'rgba(0, 127, 255, 1)'],
        [0.4,'rgba(0, 63, 255, 1)'],
        [0.5,'rgba(0, 0, 255, 1)'],
        [0.6,'rgba(0, 0, 223, 1)'],
        [0.7,'rgba(0, 0, 191, 1)'],
        [0.8,'rgba(0, 0, 159, 1)'],
        [0.9,'rgba(0, 0, 127, 1)'],
        [1.0,'rgba(63, 0, 91, 1)'],
        [1.3,'rgba(127, 0, 63, 1)'],
        [1.4,'rgba(191, 0, 31, 1)'],
        [1.5,'rgba(255, 0, 0, 1)'],
        
        

       
      ],
    },

    //   colorAxis: {
    //     stops: [
    //         [0, '#3060cf'],
    //         [0.5, '#fffbbc'],
    //         [0.9, '#c4463a']
    //     ],
    //     min: -5
    // },

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
        borderWidth: 5,
        borderColor:{ linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#FFFF99'], // start
          [0.5, '#FFDAB9'], // middle
          [1, '#FF7F50'] // end
      ]
      
      },
        borderRadius:5,
        type: 'map',
        name: 'Random data',
        states: {
          hover: {
            color:
              'rgba(2, 255, 255, 5),rgba(05, 255, 255, 13),rgba(4, 191, 255, 21),rgba(06, 127, 255, 61),rgba(02, 0478, 223, 16),rgba(07, 60, 191, 11),rgba(0, 0, 159, 1),rgba(0, 0, 127, 1),rgba(63, 06, 91, 91),rgba(127, 90, 63, 71),rgba(191, 05, 31, 91)',
          },
        },
        colsize: 24 * 521,
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

        // allAreas: true,
        data: [
          ['in-py', 755, -658, 100, 998, -808],
          ['in-ld', 115, 555, -1010, 112, 450],
          ['in-wb', 26, 605, -100, -120, 45],
          ['in-or', -96, 65, 100, 102, 45],
          ['in-br', 260, -605, -100, 12, 45],
          ['in-sk', 26, 605, -100, 120, 405],
          ['in-ct', 262, -665, 106, -126, 459],
          ['in-tn', 266, 695, -100, 102, -45],
          ['in-mp', -2666, 656, 100, 126, 45],
          ['in-2984', 26123, -6565, 100, 1200, 45],
          ['in-ga', 2654, 65, -100, 12, 45],
          ['in-nl', 26, 6500, -100, -1012, 45],
          ['in-mn', 2666, 65, -100, 126, -45],
          ['in-ar', -2656, -6895, 100, 1289, 45],
          ['in-mz', 26, -65, 100, 12, 4785],
          ['in-tr', 2669, 689, -100, 12, 4985],
          ['in-3468', 2612, 6695, 100, -12, 45],
          ['in-dl', 2698, 6985, 100, 7812, -45],
          ['in-hr', -2656, 65, 1400, 1298, 45],
          ['in-ch', 2625, -655, 100, 12, 45],
          ['in-hp', 26, 65, -100, 1201, 45],
          ['in-jk', 2696, 6355, -100, 12, 45],
          ['in-kl', 2698, 6598, 100, -12, 45],
          ['in-ka', 26, 65, 100, 12, -45],
          ['in-dn', -2146, 6598, 100, 12, 45],
          ['in-mh', 2986, -65, 100, 12, 45],
          ['in-as', 26, 6895, -100, 12, 45],
          ['in-ap', 26, 65, 100, -12, 45],
          ['in-ml', 26, 65, -100, 12, -45],
          ['in-pb', -2246, -65, 100, 12, 45],
          ['in-rj', -26, -6985, 100, 12, 45],
          ['in-up', 2456, -6598, -10098, 1254, 45],
          ['in-ut', 2456, 6598, -10098, -1254, 45],
          ['in-jh', 2366, 6985, 100, -1782, -45],
        ],
      },
    ],
  };
}

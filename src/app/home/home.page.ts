import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChartDataSets } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* Line Chart */

  chartData: ChartDataSets[] = [
    { data: [123, 400, 900, 1500, 800, 700, 1400], label: 'Active Users'},
    { data: [1377, 1100, 600, 0, 700, 800, 100], label: 'Inactive Users'}
  ];
  chartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Active users on the week'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };

  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#DE8E1F'
    }
  ];
  

  chartType = 'line';
  showLegend = true;

  /* Pie chart */

  pieChartOptions = {
    title: {
      display: true,
      text: 'Users genders'
    },
    responsive: true,
  };
  pieChartLabels: Label[] = ['Men', 'Women', 'Not Specified'];
  pieChartData: SingleDataSet = [700, 750, 50];
  pieChartType = 'pie';
  pieChartLegend = true;
  pieChartColors: Color[] = [
    {
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(222, 142, 31)'
      ],
      backgroundColor: [
        'rgb(255, 99, 132, 0.5)',
        'rgb(54, 162, 235, 0.5)',
        'rgb(222, 142, 31, 0.5)'
      ],
    }
  ];

  constructor(private router: Router) {}
  
  onUsersClick(){
    this.router.navigateByUrl('/users', { replaceUrl: true })
  }

  onLogout(){
    this.router.navigateByUrl('/login', { replaceUrl: true })
  }

}

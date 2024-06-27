import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  emailStatisticsData: ChartData<'pie'> = {
    labels: ['Open', 'Bounce', 'Unsubscribe'],
    datasets: [{
      data: [62, 32, 6],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  usersBehaviorData: ChartData<'line'> = {
    labels: ['9AM', '12PM', '3PM', '6PM', '9PM', '12AM', '3AM'],
    datasets: [
      {
        label: 'Open',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(77,83,96,0.2)'
      },
      {
        label: 'Click',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(153,102,255,0.2)'
      }
    ]
  };

  salesData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: '2014 Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75,192,192,0.4)'
    }]
  };

  tasksData: ChartData<'bar'> = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Tasks',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255,99,132,0.2)'
    }]
  };
}

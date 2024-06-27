import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  @Input() data: ChartData<'pie' | 'line' | 'bar'>;
  @Input() type: ChartType;
}

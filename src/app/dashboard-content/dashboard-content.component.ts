import { Component } from '@angular/core';
import { DashboardChartComponent } from '../dashboard-chart/dashboard-chart.component';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [DashboardChartComponent],
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent {}

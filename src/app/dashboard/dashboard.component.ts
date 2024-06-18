import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContentComponent } from '../dashboard-content/dashboard-content.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from '../dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardContentComponent, DashboardHeaderComponent, DashboardSidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}

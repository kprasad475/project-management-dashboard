import { Component } from '@angular/core';
export interface Project {
  id: number;
  name: string;
  status: string;
  priority: string;
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {
  displayedColumns: string[] = ['id', 'name', 'status', 'priority', 'startDate', 'endDate', 'actions'];
  projects: Project[] = [
    { id: 1, name: 'Project A', status: 'Completed', priority: 'High', startDate: new Date('2023-01-01'), endDate: new Date('2023-03-01') },
    { id: 2, name: 'Project B', status: 'In Progress', priority: 'Medium', startDate: new Date('2023-02-15'), endDate: new Date('2023-06-15') },
    { id: 3, name: 'Project C', status: 'Not Started', priority: 'Low', startDate: new Date('2023-04-01'), endDate: new Date('2023-09-01') },
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Not Started':
        return 'status-not-started';
      default:
        return '';
    }
  }

  editProject(project: Project): void {
    // Add your edit logic here
    console.log('Edit project:', project);
  }

  deleteProject(id: number): void {
    // Add your delete logic here
    console.log('Delete project with ID:', id);
  }
}

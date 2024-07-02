import { Component } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

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
  projects: Project[] = [
    { id: 1, name: 'Project A', status: 'Active', priority: 'High', startDate: new Date(), endDate: new Date() },
    { id: 2, name: 'Project B', status: 'Completed', priority: 'Medium', startDate: new Date(), endDate: new Date() },
    { id: 3, name: 'Project C', status: 'Pending', priority: 'Medium', startDate: new Date(), endDate: new Date() },
    { id: 4, name: 'Project D', status: 'Abandoned', priority: 'Medium', startDate: new Date(), endDate: new Date() },
    // Add more projects as needed
  ];
  displayedColumns: string[] = ['id', 'name', 'status', 'priority', 'startDate', 'endDate', 'actions'];
  dataSource = new MatTableDataSource(this.projects);

  editingProject: Project | null = null;

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Completed':
        return 'status-completed';
      case 'Pending':
        return 'status-pending';
      case 'Abandoned':
        return 'status-abandoned';
      default:
        return '';
    }
  }

  editProject(project: Project): void {
    this.editingProject = { ...project }; // Create a copy of the project for editing
  }

  saveProject(): void {
    if (this.editingProject) {
      const index = this.projects.findIndex(p => p.id === this.editingProject!.id);
      if (index !== -1) {
        this.projects[index] = { ...this.editingProject };
        this.dataSource.data = [...this.projects]; // Update the data source
        this.editingProject = null; // Clear the editing state
      }
    }
  }

  cancelEdit(): void {
    this.editingProject = null; // Clear the editing state
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(project => project.id !== id);
    this.dataSource.data = [...this.projects]; // Update the data source
  }
  // editUser(){
  //   const dialogRef = this.dialog.open(UserDialogComponent, {
  //     width: '300px',
  //     data: { ...this.projects }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       const index = this.projects.findIndex(u => u.id === result.id);
  //       if (index !== -1) {
  //         this.projects[index] = result;
  //        // this.projects = [...this.users];
  //        // localStorage.setItem('users', JSON.stringify(this.users));
  //         console.log('User updated:', result);
  //       }
  //     }
  //   });
  // }
}

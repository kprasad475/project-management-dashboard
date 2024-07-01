import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router){}
  navigateToUserProfile():void{
    this.router.navigate(['/user-profile'])
  }
  navigateToDashboard():void{
    this.router.navigate(['/dashboard'])
  }
  navigateToTableList():void{
    this.router.navigate(['/table-list'])
  }
  navigateToTypography(){
    this.router.navigate(['/typography'])
  }
  navigateToIcons(){
    this.router.navigate(['icons'])
  }
}

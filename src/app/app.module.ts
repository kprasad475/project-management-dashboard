import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from  '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { NgChartsModule } from 'ng2-charts';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { TableListComponent } from './table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component'  
import { MatTableDataSource } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ChartComponent,
    CardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,MatInputModule,
    MatSlideToggleModule,MatListModule,
    MatToolbarModule,
    NgChartsModule,BrowserAnimationsModule,
    FormsModule,MatDialogModule,ReactiveFormsModule,FormsModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

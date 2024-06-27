import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ChartComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,MatInputModule,
    MatSlideToggleModule,MatListModule,
    MatToolbarModule,
    NgChartsModule,BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

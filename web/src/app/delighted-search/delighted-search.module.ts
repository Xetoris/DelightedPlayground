import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatGridListModule,
  MatIconModule
} from '@angular/material';

import { DelightedSearchRoutingModule } from './delighted-search-routing.module';
import { RecentSurveysComponent } from './recent-surveys/recent-surveys.component';
import { ResponseIconPipe } from './pipes/response-icon.pipe';

@NgModule({
  declarations: [
    RecentSurveysComponent,
    ResponseIconPipe
  ],
  imports: [
    CommonModule,
    DelightedSearchRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class DelightedSearchModule { }

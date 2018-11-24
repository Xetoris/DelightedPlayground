import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelightedSearchRoutingModule } from './delighted-search-routing.module';
import { RecentSurveysComponent } from './recent-surveys/recent-surveys.component';

@NgModule({
  declarations: [RecentSurveysComponent],
  imports: [
    CommonModule,
    DelightedSearchRoutingModule
  ]
})
export class DelightedSearchModule { }

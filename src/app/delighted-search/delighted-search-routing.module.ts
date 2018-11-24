import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentSurveysComponent } from './recent-surveys/recent-surveys.component';

const routes: Routes = [
  {
    path: 'recent',
    component: RecentSurveysComponent
  },
  {
    path: '',
    redirectTo: 'recent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DelightedSearchRoutingModule {}

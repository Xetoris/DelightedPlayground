import { Component, OnInit } from '@angular/core';

import { DelightedService } from "../../app-services/delighted/delighted.service";
import { SurveyResponse } from "../../app-services/delighted/models/survey-response";
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recent-surveys',
  templateUrl: './recent-surveys.component.html',
  styleUrls: ['./recent-surveys.component.scss']
})
export class RecentSurveysComponent implements OnInit {
  results: Array<SurveyResponse>;
  appliedFilter: string;
  commentsRequired: boolean;

  constructor(private delighted: DelightedService) { }

  ngOnInit() {
    this.pullResults();
  }

  onCommentChange(val: boolean) {
    this.commentsRequired = val;

    this.pullResults();
  }

  onFilterChange(val: string) {
    if(val == 'off')
    {
      this.appliedFilter = null;
    } else {
      this.appliedFilter = val;
    }

    this.pullResults();
  }

  pullResults(){
    this.delighted.latestSurveyResponses(100, this.appliedFilter, this.commentsRequired)
      .pipe(take(1))
      .subscribe(x => this.results = x);
  }
}

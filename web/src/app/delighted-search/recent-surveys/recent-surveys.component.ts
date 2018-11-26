import { Component, OnInit } from '@angular/core';

import { DelightedService } from "../../app-services/delighted/delighted.service";
import { SurveyResponse } from "../../app-services/delighted/models/survey-response";

@Component({
  selector: 'app-recent-surveys',
  templateUrl: './recent-surveys.component.html',
  styleUrls: ['./recent-surveys.component.scss']
})
export class RecentSurveysComponent implements OnInit {
  results: Array<SurveyResponse>;

  constructor(private delighted: DelightedService) { }

  ngOnInit() {
    this.delighted.latestSurveyResponses(100)
      .subscribe(x => this.results = x);
  }
}

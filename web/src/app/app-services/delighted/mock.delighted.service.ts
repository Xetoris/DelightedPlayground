import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';

import { DelightedServiceInterface } from './delighted.service.interface';
import { MockDelightedResponses } from './mock.delighted.responses';
import { ResponseConverter } from './utility/response-converter';
import { SurveyResponse } from './models/survey-response';


@Injectable({
  providedIn: 'root'
})

export class MockDelightedService implements DelightedServiceInterface {

  /**
   * Returns survey responses, in ascending creation date order.
   */
  surveyResponses(count: number = 20, ratingFilter: string = '', requireComment: boolean): Observable<Array<SurveyResponse>> {
    return of(MockDelightedResponses.surveyResponses)
      .pipe(
        map((response) => response.map(entry => ResponseConverter.parseSurveyResponse(entry))),
        map( (response) => response.filter(x => this.applyFilter(x['rating'], ratingFilter)))
      );
  }

  /**
   * Returns survey responses, in descending creation date order.
   */
  latestSurveyResponses(count: number = 20, ratingFilter: string = '', requireComment: boolean): Observable<Array<SurveyResponse>> {
    return of(MockDelightedResponses.surveyResponses.reverse())
      .pipe(
        map((response) => response.map(entry => ResponseConverter.parseSurveyResponse(entry))),
        map( (response) => response.filter(x => this.applyFilter(x['rating'], ratingFilter)))
      );
  }

  private applyFilter(value: string, filter: string) {
    let match: boolean = true;

    console.log(value);
    console.log(filter);

    if(filter != null && filter.length > 0) {
      match = value.toLowerCase() == filter.toLowerCase();
    }

    return match;
  }
}


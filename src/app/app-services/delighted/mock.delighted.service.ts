import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
  surveyResponses(): Observable<Array<SurveyResponse>> {
    return of(MockDelightedResponses.surveyResponses)
      .pipe(
        map((response) => response.map(entry => ResponseConverter.parseSurveyResponse(entry))
        ));
  }

  /**
   * Returns survey responses, in descending creation date order.
   */
  latestSurveyResponses(): Observable<Array<SurveyResponse>> {
    return of(MockDelightedResponses.surveyResponses.reverse())
      .pipe(
        map((response) => response.map(entry => ResponseConverter.parseSurveyResponse(entry))
        ));
  }
}


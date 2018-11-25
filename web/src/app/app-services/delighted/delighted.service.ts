import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { DelightedServiceInterface } from './delighted.service.interface';
import { ResponseConverter } from './utility/response-converter';
import { SurveyResponse } from './models/survey-response';


@Injectable({
  providedIn: 'root'
})
export class DelightedService implements DelightedServiceInterface {
  constructor(private http: HttpClient) { }

  /**
   * Returns survey responses, in ascending creation date order.
   */
  latestSurveyResponses(): Observable<Array<SurveyResponse>> {
    return this.http.get<Array<object>>(`${environment.delighted}/survey-responses?recent=true`)
      .pipe(
        map(response =>  response.map(entry => ResponseConverter.parseSurveyResponse(entry)))
      );
  }

  /**
   * Returns survey responses, in descending creation date order.
   */
  surveyResponses(): Observable<Array<SurveyResponse>> {
    return this.http.get<Array<object>>(`${environment.delighted}/survey-responses`)
      .pipe(
        map(response =>  response.map(entry => ResponseConverter.parseSurveyResponse(entry)))
      );
  }
}

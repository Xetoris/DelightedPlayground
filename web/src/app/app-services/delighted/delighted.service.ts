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
  latestSurveyResponses(count: number = 20, ratingFilter: string = null, requireComment: boolean = false): Observable<Array<SurveyResponse>> {
    return this.http.get<Array<object>>(`${environment.delighted}/survey-responses?recent=true&${DelightedService.paramerize(count, ratingFilter, requireComment)}`)
      .pipe(
        map(response =>  response.map(entry => ResponseConverter.parseSurveyResponse(entry)))
      );
  }

  /**
   * Returns survey responses, in descending creation date order.
   */
  surveyResponses(count: number = 20, ratingFilter: string = null, requireComment: boolean = false): Observable<Array<SurveyResponse>> {
    return this.http.get<Array<object>>(`${environment.delighted}/survey-responses?${DelightedService.paramerize(count, ratingFilter, requireComment)}`)
      .pipe(
        map(response =>  response.map(entry => ResponseConverter.parseSurveyResponse(entry)))
      );
  }

  /**
   * Converts our parameters into a parameter string.
   * @param count
   * @param ratingFilter
   * @param requireComment
   */
  private static paramerize(count: number, ratingFilter: string, requireComment: boolean) {
    let paramString = `count=${count}&require_comment=${requireComment}`;

    if(ratingFilter != null) {
      paramString += `&rating=${ratingFilter}`
    }



    return paramString;
  }
}

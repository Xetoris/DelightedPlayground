import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { DelightedServiceInterface } from './delighted.service.interface';
import { ResponseConverter } from './utility/response-converter';
import { SurveyResponse } from './models/survey-response';


@Injectable({
  providedIn: 'root'
})
export class DelightedService implements DelightedServiceInterface {
  private apiKey: string;

  /**
   * Sets the API key to use for accessing the API.
   * @param key
   */
  setApiKey(key: string) {
    this.apiKey = key;
  }

  /**
   * Retrieves the header collection object for our requests to Delightful's API.
   */
  private requestHeaders(): HttpHeaders {
    if(this.apiKey == null || this.apiKey.length < 1)
    {
      throw('Must specify API key for Delighted service before making API requests.')
    }

    return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Basic ${btoa(this.apiKey + ':')}`});
  }

  constructor(private http: HttpClient) { }

  /**
   * Returns survey responses, in ascending creation date order.
   */
  latestSurveyResponses(): Observable<Array<SurveyResponse>> {
    return this.http.get<Array<object>>(`${environment.delighted}/v1/survey_responses.json?order=desc`, { headers: this.requestHeaders() })
      .pipe(
        map(response =>  response.map(entry => ResponseConverter.parseSurveyResponse(entry)))
      );
  }

  /**
   * Returns survey responses, in descending creation date order.
   */
  surveyResponses(): Observable<Array<SurveyResponse>> {
    return this.http.get<Array<object>>(`${environment.delighted}/v1/survey_responses.json`, { headers: this.requestHeaders() })
      .pipe(
        map(response =>  response.map(entry => ResponseConverter.parseSurveyResponse(entry)))
      );
  }
}

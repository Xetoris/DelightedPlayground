import { Observable } from 'rxjs';

import { SurveyResponse } from './models/survey-response';

export interface DelightedServiceInterface {

  /**
   * Returns survey responses, in ascending creation date order.
   */
  surveyResponses(count: number, ratingFilter: string, requireComment: boolean): Observable<Array<SurveyResponse>>;

  /**
   * Returns survey responses, in descending creation date order.
   */
  latestSurveyResponses(count: number, ratingFilter: string, requireComment: boolean): Observable<Array<SurveyResponse>>;
}

import  {SurveyResponse } from '../models/survey-response';

export class ResponseConverter {
  /**
   * Utility method for parsing our response object to the SurveyResponse model.
   * @param source The raw response object returned from the array.
   */
  static parseSurveyResponse(source): SurveyResponse {
    const personProps = source['person_properties'];

    return {
      'id': source['id'],
      'person': source['person'],
      'surveyType': source['survey_type'],
      'score': source['score'],
      'comment': source['comment'],
      'permalink': source['permalink'],
      'createdAt': source['created_at'],
      'updatedAt': source['updated_at'],
      'notes': source['notes'],
      'tags': source['tags'],
      'rating': source['rating'],
      'personProperties': {
        'delightedSource': personProps['delighted_source'],
        'role': personProps['role'],
        'customerId': personProps['customerId'],
        'ipAddress': personProps['IP Address'],
        'userAgent': personProps['User Agent'],
        'page': personProps['Page'],
        'pageUrl': personProps['Page URL'],
        'referrerSite': personProps['Referrer Site'],
        'referrerUrl': personProps['Referrer URL'],
        'deviceType': personProps['Device Type'],
        'operatingSystem': personProps['Operating System'],
        'browser': personProps['Browser'],
        'country': personProps['Country']
      }
    };
  }
}

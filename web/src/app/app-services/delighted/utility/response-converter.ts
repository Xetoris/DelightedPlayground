import { SurveyResponse } from '../models/survey-response';

export class ResponseConverter {
  /**
   * Utility method for parsing our response object to the SurveyResponse model.
   * @param source The raw response object returned from the array.
   */
  static parseSurveyResponse(source): SurveyResponse {
    const personProps = source['person_properties'];

    let result = {
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
        'delightedSource': null,
        'role': null,
        'customerId': null,
        'ipAddress': null,
        'userAgent': null,
        'page': null,
        'pageUrl': null,
        'referrerSite': null,
        'referrerUrl': null,
        'deviceType': null,
        'operatingSystem': null,
        'browser': null,
        'country': null
      }
    };

    let parsedProps = result['personProperties'];

    if (personProps != null) {
      parsedProps['delightedSource'] = personProps['delighted_source'];
      parsedProps['role'] = personProps['role'];
      parsedProps['customerId'] = personProps['customerId'];
      parsedProps['ipAddress'] = personProps['IP Address'];
      parsedProps['userAgent'] = personProps['User Agent'];
      parsedProps['page'] = personProps['Page'];
      parsedProps['pageUrl'] = personProps['Page URL'];
      parsedProps['referrerSite'] = personProps['Referrer Site'];
      parsedProps['referrerUrl'] = personProps['Referrer URL'];
      parsedProps['deviceType'] = personProps['Device Type'];
      parsedProps['operatingSystem'] = personProps['Operating System'];
      parsedProps['browser'] = personProps['Browser'];
      parsedProps['country'] = personProps['Country'];
    }

    return result;
  }
}

import { ResponseConverter } from './response-converter';

describe('ResponseConverter', () => {
  let mockResponse = {
      'id': 'Id',
      'person': 'Person',
      'survey_type': 'SurveyType',
      'score': 1,
      'comment': 'Comment',
      'permalink': 'Permalink',
      'created_at': 'CreatedAt',
      'updated_at': 'UpdatedAt',
      'person_properties': {
        'delighted_source': 'DelightedSource',
        'customerId': 'CustomerId',
        'Page': 'Page',
        'Page URL': 'PageUrl',
        'Referrer URL': 'ReferrerUrl',
        'User Agent': 'UserAgent',
        'IP Address': 'IPAddress',
        'Device Type': 'DeviceType',
        'Operating System': 'OperatingSystem',
        'Browser': 'Browser',
        'Country': 'Country'
      },
      'notes': ['Notes'],
      'tags': ['Tags'],
      'rating': 'Rating'
    };

  it('can parse a response', () => {
    let parsed = ResponseConverter.parseSurveyResponse(mockResponse);

    expect(parsed.id).toEqual('Id');
    expect(parsed.person).toEqual('Person');
    expect(parsed.surveyType).toEqual('SurveyType');
    expect(parsed.score).toEqual(1);
    expect(parsed.comment).toEqual('Comment');
    expect(parsed.permalink).toEqual('Permalink');
    expect(parsed.createdAt).toEqual('CreatedAt');
    expect(parsed.updatedAt).toEqual('UpdatedAt');
    expect(parsed.personProperties).not.toBeNull();
    expect(parsed.personProperties.delightedSource).toEqual('DelightedSource');
    expect(parsed.personProperties.customerId).toEqual('CustomerId');
    expect(parsed.personProperties.page).toEqual('Page');
    expect(parsed.personProperties.pageUrl).toEqual('PageUrl');
    expect(parsed.personProperties.referrerUrl).toEqual('ReferrerUrl');
    expect(parsed.personProperties.userAgent).toEqual('UserAgent');
    expect(parsed.personProperties.ipAddress).toEqual('IPAddress');
    expect(parsed.personProperties.deviceType).toEqual('DeviceType');
    expect(parsed.personProperties.operatingSystem).toEqual('OperatingSystem');
    expect(parsed.personProperties.browser).toEqual('Browser');
    expect(parsed.personProperties.country).toEqual('Country');
    expect(parsed.notes).not.toBeNull();
    expect(parsed.notes.length).toEqual(1);
    expect(parsed.notes[0]).toEqual('Notes');
    expect(parsed.tags.length).toEqual(1);
    expect(parsed.tags[0]).toEqual('Tags');
    expect(parsed.rating).toEqual('Rating');
  });

  it('can handle missing person properties collection', () => {
    let mock = mockResponse;

    mock['person_properties'] = null;

    ResponseConverter.parseSurveyResponse(mock);
  });

  it('can handle an empty person properties collection', () => {
    let mock = mockResponse;

    // @ts-ignore
    mock['person_properties'] = [];

    ResponseConverter.parseSurveyResponse(mock);
  });

  it('can handle a null notes collection', () => {
    let mock = mockResponse;

    mock['notes'] = null;

    ResponseConverter.parseSurveyResponse(mock);
  });

  it('can handle a null tags collection', () => {
    let mock = mockResponse;

    mock['tags'] = null;

    ResponseConverter.parseSurveyResponse(mock);
  });
});

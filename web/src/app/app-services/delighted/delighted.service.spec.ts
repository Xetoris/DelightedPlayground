import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { DelightedService } from './delighted.service';
import { MockDelightedResponses } from './mock.delighted.responses';
import { SurveyResponse } from './models/survey-response';

describe('DelightedService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DelightedService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', inject([DelightedService], (service: DelightedService) => {
    expect(service).toBeTruthy();
  }));

  it('can retrieve survey responses', inject([DelightedService], (service: DelightedService) => {
    service.surveyResponses()
      .subscribe(resp => {
        expect<SurveyResponse>(resp).not.toBeNull();
        expect(resp.length).toBeGreaterThan(0);
      });

    const req = httpTestingController.match(`${environment.delighted}/survey-responses`);

    req.forEach(x => x.flush(MockDelightedResponses.surveyResponses));
  }));

  it('can retrieve latest survey responses', inject([DelightedService], (service: DelightedService) => {
    service.latestSurveyResponses()
      .subscribe(resp => {
        expect<SurveyResponse>(resp).not.toBeNull();
        expect(resp.length).toBeGreaterThan(0);
      });

    const req = httpTestingController.match(`${environment.delighted}/survey-responses?count=20&order=desc`);

    req.forEach(x => x.flush(MockDelightedResponses.surveyResponses.reverse()));
  }));
});

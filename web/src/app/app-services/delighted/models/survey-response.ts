/**
 * Details about the NPS response.
 */
export interface SurveyResponse {
  id: string;
  person: string;
  surveyType: string;
  score: number;
  comment: string;
  permalink: string;
  createdAt: string;
  updatedAt: string;
  notes: string[];
  tags: string[];
  personProperties: PersonProperties;
}

/**
 * Collection of properties we collect about someone who submits an NPS response.
 */
export interface PersonProperties {
  delightedSource: string;
  role: string;
  customerId: string;
  page: string;
  pageUrl: string;
  referrerSite: string;
  referrerUrl: string;
  userAgent: string;
  ipAddress: string;
  deviceType: string;
  operatingSystem: string;
  browser: string;
  country: string;
}

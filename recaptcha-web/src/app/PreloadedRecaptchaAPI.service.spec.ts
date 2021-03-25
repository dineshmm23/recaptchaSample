/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreloadedRecaptchaAPIService } from './PreloadedRecaptchaAPI.service';

describe('Service: PreloadedRecaptchaAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadedRecaptchaAPIService]
    });
  });

  it('should ...', inject([PreloadedRecaptchaAPIService], (service: PreloadedRecaptchaAPIService) => {
    expect(service).toBeTruthy();
  }));
});

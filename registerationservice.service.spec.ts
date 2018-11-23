import { TestBed, inject } from '@angular/core/testing';

import { RegisterationserviceService } from './registerationservice.service';

describe('RegisterationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterationserviceService]
    });
  });

  it('should be created', inject([RegisterationserviceService], (service: RegisterationserviceService) => {
    expect(service).toBeTruthy();
  }));
});

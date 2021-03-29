import { TestBed } from '@angular/core/testing';
import { IlotService } from './ilot.service';

describe('IlotService', () => {
  let service: IlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

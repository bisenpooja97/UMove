import { TestBed, getTestBed } from '@angular/core/testing';

import { FuelService } from './fuel.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('FuelService', () => {

  let injector: TestBed;
  let service: FuelService;
  let httpMock: HttpTestingController;

  const dummyResponse = {


    data: [
      {
        id:'1',
        name: 'Petrol',
        fuelCost: 100
      }
    ],

    message: 'Fuel Found',
    status: 'OK',
    count: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [FuelService],
    });
    injector = getTestBed();
    service = injector.get(FuelService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: FuelService = TestBed.get(FuelService);
    expect(service).toBeTruthy();
  });


  it('getDetailsType() should return list of Fuel', () => {
  service.getFuel().subscribe((Resp1) => {
    expect(Resp1).toEqual(dummyResponse);
  });

  const req = httpMock.expectOne('http://172.23.234.112:8093/api/v1/fuel');
  expect(req.request.method).toBe('GET');
  req.flush(dummyResponse);
});



//   it('getDetailsByName() should return details of particular type', () => {
//   service.getFuelByName('Petrol').subscribe((Resp) => {
//     expect(Resp).toEqual(dummyResponse);
//   });

//   const req = httpMock.expectOne('http://172.23.234.112:8093/api/v1/fuel?name=Petrol');
//   expect(req.request.method).toBe('GET');
//   req.flush(dummyResponse);
// });
});

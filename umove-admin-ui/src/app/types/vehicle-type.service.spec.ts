import { TestBed, getTestBed } from '@angular/core/testing';

import { VehicleTypeService } from './vehicle-type.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehicleTypeService', () => {

  let injector: TestBed;
  let service: VehicleTypeService;
  let httpMock: HttpTestingController;

  const dummyResponse = {


    data: [
      {
        id: '1',
        name: 'KTM',
        costPerKm: 1,
        costPerMin: 1,
        vehicleCC: '200',
        mileage: 1,
        fuel: {
          id: '1',
          name: 'Petrol',
          fuelCost: 100
        },
        url: 'abc',
        baseFare: 1
      }
    ],

    message: 'Vehicle type Found',
    status: 'OK',
    count: 1
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [VehicleTypeService],
    });
    injector = getTestBed();
    service = injector.get(VehicleTypeService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    const myServive: VehicleTypeService = TestBed.get(VehicleTypeService);
    expect(myServive).toBeTruthy();
  });


  it('getDetailsType() should return list of Type', () => {
    service.getType().subscribe((Resp1) => {
      expect(Resp1).toEqual(dummyResponse);

      const req = httpMock.expectOne('http://172.23.234.112:8093/api/v1/types');
      expect(req.request.method).toBe('GET');
      req.flush(dummyResponse);
    });

  });
});

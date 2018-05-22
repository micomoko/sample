import { Injectable } from '@angular/core';

@Injectable()
export class LocationDomain {

  private static readonly location = [
    {
      locationID: 1,
      locationName: 'Makati'
    },
    {
      locationID: 2,
      locationName: 'Quezon City'
    },
    {
      locationID: 3,
      locationName: 'Ortigas'
    },
    {
      locationID: 4,
      locationName: 'Southside'
    },
    {
      locationID: 5,
      locationName: 'Cebu'
    }
  ];

  /*
   * Get Location List.
   */
  getLocation(){
   return LocationDomain.location;
  }

  /*
   * Get Location Name by ID.
   */
  getLocationName(locationID: number){
   return LocationDomain.location.filter(loc => loc.locationID === locationID);
  }
}

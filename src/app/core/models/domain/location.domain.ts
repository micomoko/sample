import { Injectable } from '@angular/core';

@Injectable()
export class LocationDomain {

  private static readonly location = [
    {
      locationID: 1,
      locationName: 'Makati City'
    },
    {
      locationID: 2,
      locationName: 'Quezon City'
    },
    {
      locationID: 3,
      locationName: 'Pasig City'
    },
    {
      locationID: 4,
      locationName: 'Tagaytay'
    },
    {
      locationID: 5,
      locationName: 'Laguna'
    },
    {
      locationID: 6,
      locationName: 'Cavite'
    },
    {
      locationID: 7,
      locationName: 'Cebu'
    }
  ];

  /*
   * Get Location List.
   */
  getLocations(){
   return LocationDomain.location;
  }

  /*
   * Get Location Name by ID.
   */
  getLocationID(locationID: number){
   return LocationDomain.location.filter(loc => loc.locationID === locationID);
  }
}

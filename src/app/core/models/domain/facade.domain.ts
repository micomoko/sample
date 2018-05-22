import { Injectable } from '@angular/core';

@Injectable()
export class FacadeDomain {

  private static readonly facade = [
    {
      projectID: 1,
      facade : [

      ],
    }
  ];


  /*
   * Get Location Name by ID.
   */
  getFacadeById(projectID: number){
   let response = FacadeDomain.facade.filter(loc => loc.projectID === projectID);
   return response && response.length > 0 ? response[0].facade : null;
  }
}

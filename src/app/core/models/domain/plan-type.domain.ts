import { Injectable } from '@angular/core';

@Injectable()
export class PlanTypeDomain {

  private static readonly type = [

    //*******************START QUEZON CITY**************************//

    {
      projectID: 21,
      type : [
        "150 Duplex and Triplex: 153 sq.m. | 1,647 sq.ft.",
        "170 Duplex and Triplex: 173 sq.m. | 1,862 sq.ft.",
        "185 Duplex and Triplex: 186 sq.m. | 2,002 sq.ft."
      ]
    }

    //*******************END QUEZON CITY**************************//

  ];


  /*
   * Get Category Name by ID.
   */
  getPlanTypeByID(projectID: number){
    let response = PlanTypeDomain.type.filter(loc => loc.projectID === projectID);
   return response && response.length > 0 ? response[0].type : null;
  }
}
import { Injectable } from '@angular/core';

@Injectable()
export class LotRangeDomain {

  private static readonly range = [

    //*******************START QUEZON CITY**************************//

    {
      projectID: 21,
      range : [
        "Average Lot Size: 111 sq.m. | 1,194 sq.ft.",
        "Lot Size Range: 153-186 sq.m. | 1,647-2,002 sq.ft."
      ]
    },

    //*******************END QUEZON CITY**************************//


    //*******************START LAGUNA**************************//

    {
      projectID: 51,
      range : [
        "296 - 470 sq.m. | 3,186.12 - 5,059.04 sq.ft."
      ]
    },


    {
      projectID: 52,
      range : [
        "350-755 sq.m. | 3,767.37-8,126.75 sq.ft."
      ]
    },

    {
      projectID: 53,
      range : [
        "431 sq.m. | 441.32 sq.ft."
      ]
    },

     {
      projectID: 54,
      range : [
        "269-541 sq.m. | 2,895 - 5,823 sq.ft."
      ]
    },

    //*******************END LAGUNA**************************//


    //*******************START CAVITE**************************//

    {
      projectID: 61,
      range : [
        "300 – 2,600 sqm"
      ]
    },

    //*******************END CAVITE**************************//

  ];


  /*
   * Get Category Name by ID.
   */
  getLotRangeByID(projectID: number){
    let response = LotRangeDomain.range.filter(loc => loc.projectID === projectID);
   return response && response.length > 0 ? response[0].range : null;
  }
}

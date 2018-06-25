import { Injectable } from '@angular/core';

@Injectable()
export class ConstructionDomain {

  private static readonly construction = [

    //*******************START MAKATI**************************//

    {
      projectID: 11,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-Callisto-Tower-1-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 12,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-Alveo-Financial-Tower-Construction-Update.jpg"
      ],
    },

    {
      projectID: 13,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-Kroma-Tower-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 14,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-Escala-Salcedo-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 16,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-Solstice-Towers-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 18,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-The-Gentry-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 19,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-The-Gentry-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 110,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-The-Lerato-Tower-3-Construction-Updates.jpg"
      ],
    },

    {
      projectID: 111,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2018-03-The-Stiles-Enterprise-Plaza-Construction-Updates.jpg"
      ],
    },


    


    //*******************END MAKATI**************************//


     //*******************START ORTIGAS**************************//

    {
      projectID: 32,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Portico-Q4-2017-CU.jpg"
      ],
    },

     //*******************END ORTIGAS**************************//

     //*******************START QUEZON CITY**************************//

     {
      projectID: 22,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/HP-CU-DEC-2017.png"
      ],
    },


     //*******************END QUEZON CITY**************************//


     //*******************START TAGAYTAY**************************//


    {
      projectID: 44,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/construction1-min-2.png"
      ],
    },


    //*******************END TAGAYTAY**************************//

    //*******************START LAGUNA**************************//

    {
      projectID: 51,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/March-2018-1.jpg"
      ],
    },


    {
      projectID: 52,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Lumira-October-2017.png"
      ],
    },

    {
      projectID: 54,
      construction : [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Mondia-March-2018.png"
      ],
    },




    //*******************END LAGUNA**************************//
  ];


  /*
   * Get Location Name by ID.
   */
  getConstructionById(projectID: number){
   let response = ConstructionDomain.construction.filter(loc => loc.projectID === projectID);
   return response && response.length > 0 ? response[0].construction : null;
  }
}

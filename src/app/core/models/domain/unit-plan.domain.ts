import { Injectable } from '@angular/core';

@Injectable()
export class UnitPlanDomain {

  private static readonly unitPlan = [

    //*******************START MAKATI**************************//
    {
      projectID: 11,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Callisto-Tower-1-Unit-Plan-Studio.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Callisto-Tower-1-Unit-Plan-One-bedroom.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Callisto-Tower-1-Unit-Plan-Two-bedroom.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Callisto-Tower-1-Unit-Plan-Special-Three-bedroom.jpg"
      ]
    },

    {
      projectID: 18,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/9th-to-16th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/17th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/18th-Floor-Plan-copy.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/19th-to-22nd-Floor-Plan-copy.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/23rd-Floor-Plan-copy.jpg"
      ]
    },

    {
      projectID: 19,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Slide1-1.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Slide2-1.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Slide3-1.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Slide4-1.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Slide5.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Slide6.jpg"
      ]
    },

    {
      projectID: 111,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/10th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/11th-to-25th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/26th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/27th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/28th-to-36th-Floor-Plan.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/37th-Floor-Plan.jpg"
      ]
    },


    //*******************END MAKATI**************************//

     //*******************START ORTIGAS**************************//
    {
      projectID: 32,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Studio.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/1BR-Type-A.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/1BR-Type-B.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2BR-Type-A.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/2BR-Type-B.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/3BR-Twin-Flat.jpg",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/3BR.jpg"
      ]
    },

     //*******************END ORTIGAS**************************//

     //*******************START QUEZON CITY**************************//

     {
      projectID: 22,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/High-Park-Tower-Two-Studio-2.png",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/High-Park-Tower-Two-1BR-2.png",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/High-Park-Tower-Two-2BR-2.png",
        "https://www.alveoland.com.ph/wp-content/uploads/2017/08/High-Park-Tower-Two-3BR-2.png",
      ]
    },



    {
      projectID: 23,
      unitPlan: [
        "https://www.alveoland.com.ph/wp-content/uploads/2018/01/Orean-Place-Tower-One-Studio-2.png",
        "https://www.alveoland.com.ph/wp-content/uploads/2018/01/Orean-Place-Tower-One-1BR-2.png",
        "https://www.alveoland.com.ph/wp-content/uploads/2018/01/Orean-Place-Tower-One-2BR-2.png",
        "https://www.alveoland.com.ph/wp-content/uploads/2018/01/Orean-Place-Tower-One-3BR-2.png"
      ]
    }

     //*******************END QUEZON CITY**************************//
  ];

  /*
   * Get Category Name by ID.
   */
  getUnitPlanById(projectID: number){
   let response = UnitPlanDomain.unitPlan.filter(loc => loc.projectID === projectID);
   return response && response.length > 0 ? response[0].unitPlan : null;
  }
}

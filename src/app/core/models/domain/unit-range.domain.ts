import { Injectable } from '@angular/core';

@Injectable()
export class UnitRangeDomain {

  private static readonly range = [
    {
      categoryID: 1,
      categoryName: 'Condominiums'
    },
    {
      categoryID: 2,
      categoryName: 'Lots'
    },
    {
      categoryID: 3,
      categoryName: 'Townhouses'
    },
    {
      categoryID: 4,
      categoryName: 'Offices'
    },
    {
      categoryID: 5,
      categoryName: 'Commercial Lots'
    }
  ];

  /*
   * Get Category Name by ID.
   */
  getCategoryName(categoryID: number){
   return UnitRangeDomain.range.filter(loc => loc.categoryID === categoryID);
  }
}

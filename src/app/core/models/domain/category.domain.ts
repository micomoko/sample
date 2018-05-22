import { Injectable } from '@angular/core';

@Injectable()
export class CategoryDomain {

  private static readonly category = [
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
   * Get Category List.
   */
  getCategories(){
   return CategoryDomain.category;
  }

  /*
   * Get Category Name by ID.
   */
  getCategoryName(categoryID: number){
   return CategoryDomain.category.filter(loc => loc.categoryID === categoryID);
  }
}

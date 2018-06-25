import { Injectable } from '@angular/core';

@Injectable()
export class CategoryDomain {

  private static readonly category = [
    {
      categoryID: 1,
      categoryName: 'Condominiums',
      id: 'category1'
    },
    {
      categoryID: 2,
      categoryName: 'Lots',
      id: 'category2'
    },
    {
      categoryID: 3,
      categoryName: 'Townhouses',
      id: 'category3'
    },
    {
      categoryID: 4,
      categoryName: 'Offices',
      id: 'category4'
    },
    {
      categoryID: 5,
      categoryName: 'Commercial Lots',
      id: 'category5'
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

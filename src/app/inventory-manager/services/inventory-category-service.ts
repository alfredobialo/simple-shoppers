import {Injectable} from '@angular/core';

@Injectable({providedIn : "root"})
export class InventoryCategoryService {

  constructor() {
  }
  getProductCategories(){
    return ["Smart Phones", "Kids Wears", "Ladies Shoes" , "Mens Shoes"];
  }

}

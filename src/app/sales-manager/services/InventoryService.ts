import {Injectable} from "@angular/core";
import {InventoryCategoryService} from "./inventory-category-service";

@Injectable({ providedIn : 'root'})
export class InventoryService{
  products= [
    {
      id: "001",
      name : "iPhone 11 Pro",
      amount : 999,
      qty : 16,
      description : "Durable Screen with 60Hz refresh rate, iPhone 11 Pro a Game" +
        " changer in the industry!"
    },
    {
      id: "002",
      name : "iPhone 12 Pro",
      amount : 1299,
      qty : 12,
      description : "Durable Screen with 60Hz refresh rate, iPhone 11 Pro a Game" +
        " changer in the industry!"
    },
    {
      id: "003",
      name : "Sony Max Pro",
      amount : 2999,
      qty : 4,
      description : "Durable Screen with 60Hz refresh rate, iPhone 11 Pro a Game" +
        " changer in the industry!"
    },
    {
      id: "004",
      name : "Galaxy S21 Ultra",
      amount : 1399,
      qty : 8,
      description : "Best Smartphone ever with 16Gb of Memory and high diplay"
    },
  ];
  constructor() {
  }

  getProducts(){
    return this.products;
  }

}

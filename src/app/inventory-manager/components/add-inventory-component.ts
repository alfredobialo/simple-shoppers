import {Component, OnInit} from '@angular/core';
import {ProductItem, ProductItemWithSalesHistory, SalesHistoryItem} from "../../sales-manager/models/sales-invoice";

@Component({
  selector: 'add-inventory-component',
  templateUrl: 'add-inventory-component.html',
  styles: [`
    div.bg-err {
      background-color: #eeb8a4;
      color: #b42a23;
      font-weight: bold;
      font-size: 1.5rem;
      user-select: none;
      border-radius: 10px;
      border: solid 2px #b42a23;
    }
  `]
})
export class AddInventoryComponent  implements OnInit {
  itemName: string;
  hasError: boolean = false;
  errMessage: string = "";
  defaultProductPlaceHolder = "iPhone 12 Pro Max";

  myProduct : ProductItem =  new ProductItem();
  mySaleItem : ProductItemWithSalesHistory;

  constructor() {
    this.mySaleItem = new ProductItemWithSalesHistory();
    this.mySaleItem.salesHistory = [new SalesHistoryItem()];
  }

  ngOnInit() {
    this.myProduct.name = "Galaxy S21 Pro";
    this.myProduct.amount = 1300;
    this.myProduct.description = "The best Smartphone of 2021 from Samsung";
    this.myProduct.isActive =true;
  }
  setItemName(itemName : string){
    this.itemName = itemName;
  }
  addItem(){
    this.hasError = true;
    this.errMessage ="Your input has issues: Ensure the product has a valid Name";
  }

}

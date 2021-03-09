import {Component, OnInit} from '@angular/core';
import {ProductItem, ProductItemWithSalesHistory, SalesHistoryItem} from "../../sales-manager/models/sales-invoice";
import {InventoryService} from "../../sales-manager/services/InventoryService";

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
export class AddInventoryComponent implements OnInit {


  constructor(private inventoryService : InventoryService) {

  }

  ngOnInit() {

  }


  addNewItem(id: string, name: string, amt: string, qty: string) {
    let newItem = {
      id: id,
      name: name,
      amount: parseFloat(amt),
      qty: parseFloat(qty),
      description: "Product Description Omitted!"
    };
    console.log(newItem);
    this.inventoryService.addNewProduct(newItem);
  }
}

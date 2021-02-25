import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'add-inventory-component',
  templateUrl: 'add-inventory-component.html'
})

export class AddInventoryComponent  implements OnInit {
  itemName: string;
  constructor() {
  }

  ngOnInit() {
  }
  setItemName(itemName : string){
    this.itemName = itemName;
  }
  printSalesReport(){
    window.print();
  }

}

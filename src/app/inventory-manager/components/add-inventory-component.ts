import {Component, OnInit} from '@angular/core';

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
  constructor() {
  }

  ngOnInit() {
  }
  setItemName(itemName : string){
    this.itemName = itemName;
  }
  addItem(){
    this.hasError = true;
    this.errMessage ="Your input has issues: Ensure the product has a valid Name";
  }

}

import {NgModule} from "@angular/core" ;
import {AddInventoryComponent} from "./components/add-inventory-component";
import {InventoryListComponent} from "./components/inventory-list-component";
import {InventoryItemComponent} from "./components/inventory-item-component";
import {CommonModule} from "@angular/common";
import {InventoryService} from "./services/InventoryService";
import {InventoryCategoryService} from "./services/inventory-category-service";

@NgModule({
  declarations : [AddInventoryComponent, InventoryListComponent, InventoryItemComponent], // List Of Components, Directives and Pipes
  exports : [InventoryItemComponent, InventoryListComponent], // List of Components, Directives, Pipes and Other Module you may want to make visible
  imports :[CommonModule], // Import other modules into this module
  providers :[InventoryService, InventoryCategoryService] // this are Services that are Exposed by this module
})
export class InventoryManagerModule{}

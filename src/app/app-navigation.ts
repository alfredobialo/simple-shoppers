import {Route} from "@angular/router";
import {SalesDashboardPageComponent} from "./sales-manager/pages/SalesDashboardPage";
import {InventoryListComponent} from "./inventory-manager/components/inventory-list-component";
import {NgIfStructuralDirectiveComponent} from "./structural-directive/ngIf-structural-directive";
import {NgForStructuralDirectiveComponent} from "./structural-directive/ngFor-structural-directive";

export const appNavigation : Route[] = [
  {
    path : "index",
    component : SalesDashboardPageComponent
  },
  {
    path : "inventory",
    component : InventoryListComponent
  },
  {
    path : "ngif",
    component : NgIfStructuralDirectiveComponent
  },
   {
    path : "ngfor",
    component : NgForStructuralDirectiveComponent
  },

];

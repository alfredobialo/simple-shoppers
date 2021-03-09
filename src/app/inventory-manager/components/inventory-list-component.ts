import {Component} from "@angular/core";
import {ProductItemWithSalesHistory} from "../../sales-manager/models/sales-invoice";
import {InventoryService} from "../../sales-manager/services/InventoryService";
import {InventoryCategoryService} from "../../sales-manager/services/inventory-category-service";

@Component({
  template: `
    <div class="mb-4">
      <add-inventory-component></add-inventory-component>
    </div>
    <div class="p-4 my-5">
      <span *ngFor="let c of categories">{{c}} &nbsp; </span>
    </div>

    <table class="table table-bordered">
      <tr>
        <th>S/N</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Qty Avail.</th>
        <th>Category</th>
        <th></th>
      </tr>
      <ng-container *ngIf="products.length > 0 ">
        <tr *ngFor="let p of products; let index = index;">
          <td>{{index + 1}}</td>
          <td>{{p.name}}</td>
          <td>{{p.description}}</td>
          <td>{{p.amount | currency}}</td>
          <td>{{p.qty | number}}</td>
          <td>{{p.id}}</td>
          <td>
            <button class="btn-primary btn">Details</button>
          </td>
        </tr>
      </ng-container>

    </table>
    <ng-container *ngIf="products.length === 0">
      <div class="bg-light d-flex flex-column justify-content-center align-items-center mt-n3 mb-5" style="height: 80px;">
        <p class="lead text-info">There are no Products to display</p>
      </div>
    </ng-container>
    <ng-if-structural-directive title="This is a list Inventory (updated)"></ng-if-structural-directive>
  `,
  selector: "sc-inventory-list"
})
export class InventoryListComponent {
  products = [];
  categories: string[];

  constructor(private inventoryService : InventoryService,
              private categoryService : InventoryCategoryService)
  {
    this.products  = inventoryService.getProducts();
    this.categories = categoryService.getProductCategories();
  }

  predictNextStep(name: string) {
    let accBal = 30000;
    //.... Logic
    accBal = 50000;

  }
}

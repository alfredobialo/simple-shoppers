import {Component} from "@angular/core";

@Component({
  template: `
    <table class="table table-bordered">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Qty Avail.</th>
        <th>Category</th>
        <th></th>
      </tr>
      <tr>
        <td>iPhone 12 Pro Max</td>
        <td>Best iPhone ever with 6Gb of Memory and nothing more</td>
        <td>$1230</td>
        <td>25</td>
        <td>Smart Phones</td>
        <td>
          <button class="btn-primary btn">Details</button>
        </td>
      </tr>
      <tr>
        <td>Galaxy S21 Ultra</td>
        <td>Best Smartphone ever with 16Gb of Memory and high diplay</td>
        <td>$1220</td>
        <td>45</td>
        <td>Smart Phones</td>
        <td>
          <button class="btn-primary btn">Details</button>
        </td>
      </tr>
    </table>
  `,
  selector: "sc-inventory-list"
})
export class InventoryListComponent {

}

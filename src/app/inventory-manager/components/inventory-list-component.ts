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
      <tr *ngFor="let p of products">
        <td>{{p.name}}</td>
        <td>{{p.description}}</td>
        <td>{{p.amount | currency}}</td>
        <td>{{p.qty | number}}</td>
        <td>{{p.id}}</td>
        <td>
          <button class="btn-primary btn">Details</button>
        </td>
      </tr>
    </table>
  `,
  selector: "sc-inventory-list"
})
export class InventoryListComponent {
  products = [
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

}

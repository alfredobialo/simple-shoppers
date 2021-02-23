import {Component} from "@angular/core";

@Component({
  selector : "sc-inventory-item",
  template : `
    <div>
      <h1>{{note}}</h1>
      <h3>The Value of (20 + 50) / 2 = {{ (20 + 50) / 2}}</h3>
      <hr>
      <p>Name : {{item.name}}</p>
      <p>Price : $ {{item.amount}}</p>
      <p>Qty Aval. : {{item.qty}} Psc.</p>
      <hr>
      <p class="lead text-muted">{{item.description}}</p>
    </div>
  `
})
export class InventoryItemComponent{
  item = {
    id: "001",
    name : "iPhone 11 Pro",
    amount : 999,
    qty : 16,
    description : "Durable Screen with 60Hz refresh rate, iPhone 11 Pro a Game" +
      " changer in the industry!"
  }
  note = `This is a Note ${this.item.name}`;
}

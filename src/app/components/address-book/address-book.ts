import {Component} from '@angular/core';

@Component({
  selector: "address-contact",
  template:`
    <div class="address-container card">
      <p class="address-header card-header">{{email}}</p>
      <div class="card-body">
        <p>{{contact}}</p>
        <p class="text-primary">Call Us on: {{phoneNo}}</p>
      </div>


    </div>
  `
})
export class AddressBookComponent {
  contact :string  ="120B Ado Road Ajah Lagos State";
  phoneNo ="0908 3557 271";
  email = "alfredcsdinc@gmail.com"
}

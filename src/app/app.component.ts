import {Component, Directive} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';
  contactAddress = "12 Ado Road Ajah";
  phoneNumber ="0806 9273499";
  input : string = "";
  inputChanged(txtInput: HTMLInputElement) {
    this.input  = txtInput.value;
  }

  confim() {
    window.confirm('are you sure you want to Continue');
  }
}

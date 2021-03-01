import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {InventoryItemComponent} from "./inventory-manager/components/inventory-item-component";
import {InventoryListComponent} from "./inventory-manager/components/inventory-list-component";
import {AddInventoryComponent} from "./inventory-manager/components/add-inventory-component";
import {NgIfStructuralDirectiveComponent} from "./inventory-manager/components/structural-directive/ngIf-structural-directive";
import {NgForStructuralDirectiveComponent} from "./inventory-manager/components/structural-directive/ngFor-structural-directive";

@NgModule({
  declarations: [
    AppComponent,
    InventoryItemComponent,
    InventoryListComponent,
    AddInventoryComponent,
    NgIfStructuralDirectiveComponent,
    NgForStructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {InventoryItemComponent} from "./inventory-manager/components/inventory-item-component";
import {InventoryListComponent} from "./inventory-manager/components/inventory-list-component";
@NgModule({
  declarations: [
    AppComponent,
    InventoryItemComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

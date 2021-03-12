import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InventoryManagerModule} from "./inventory-manager/InventoryManagerModule";
import {StructuralDirectiveModule} from "./structural-directive/StructuralDirectiveModule";
import {SalesModule} from "./sales-manager/SalesModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    InventoryManagerModule,
    StructuralDirectiveModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

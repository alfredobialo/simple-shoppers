import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InventoryManagerModule} from "./inventory-manager/InventoryManagerModule";
import {StructuralDirectiveModule} from "./structural-directive/StructuralDirectiveModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    InventoryManagerModule,
    StructuralDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

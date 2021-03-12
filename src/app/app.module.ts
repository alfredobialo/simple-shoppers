import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InventoryManagerModule} from "./inventory-manager/InventoryManagerModule";
import {StructuralDirectiveModule} from "./structural-directive/StructuralDirectiveModule";
import {SalesModule} from "./sales-manager/SalesModule";

import {appNavigation} from "./app-navigation";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appNavigation),
    InventoryManagerModule,
    StructuralDirectiveModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgIfStructuralDirectiveComponent} from "./ngIf-structural-directive";
import {NgForStructuralDirectiveComponent} from "./ngFor-structural-directive";

@NgModule({
  declarations :[NgIfStructuralDirectiveComponent, NgForStructuralDirectiveComponent],
  exports : [NgIfStructuralDirectiveComponent, NgForStructuralDirectiveComponent],
  imports :[CommonModule],
})
export class StructuralDirectiveModule{}

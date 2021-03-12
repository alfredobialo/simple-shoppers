import {NgModule} from '@angular/core';

import {SalesDashboardPageComponent} from './pages/SalesDashboardPage';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [SalesDashboardPageComponent],
  declarations: [SalesDashboardPageComponent],
  providers: [],
})
export class SalesModule {
}

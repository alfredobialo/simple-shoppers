import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'sales-dashboard-page',
  template: `<h1>Sales Dashboard Page Component</h1>`
})

export class SalesDashboardPageComponent implements OnInit, OnDestroy {
  constructor() {
  }

  salesAnalysis = [];

  ngOnInit() {

    this.salesAnalysis = [
      {
        totalSales: 1670000,
        totalInvoiced: 530000,
        totalPaid: 900000,
        totalExpense: 120000,
        month: "Feb"
      },
      {
        totalSales: 670000,
        totalInvoiced: 130000,
        totalPaid: 400000,
        totalExpense: 120000,
        month: "March"
      },
    ]
    console.log(this.salesAnalysis);
    //alert("SalesDashboardPage Component Initialized");
  }

  ngOnDestroy(): void {
    //alert("SalesDashboardPage is Destroyed");
    // clean code: free up memory usage
  }
}

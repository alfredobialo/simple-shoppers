export class ProductItem {
  name : string;
  amount: number;
  description :string;
  isActive: boolean;
  dateCreated : Date;
  category : string;
}

export class ProductItemWithSalesHistory extends ProductItem{
   salesHistory : SalesHistoryItem[];
   private checkDbForHistory : boolean;
   constructor() {
     super();
     this.checkDbForHistory = true;
     alert("I am constructing the class Internals");
   }

   addSalesHistory(salesHistory  : SalesHistoryItem){
     console.log(salesHistory);
   }
}

export class SalesHistoryItem{
  invoiceNo : string;
  invoiceDate : Date;
  qty : number;
  amount : number;
  itemDescription : string;

}

export class CustomerInfo{

}

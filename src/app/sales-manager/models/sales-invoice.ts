export interface ProductItem {
  name : string;
  amount: number;
  description :string;
  isActive: boolean;
  dateCreated : Date;
  category : string;
}

export class ProductItemWithSalesHistory  {
   salesHistory : SalesHistoryItem[];
   private checkDbForHistory : boolean;

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

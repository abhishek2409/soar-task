export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}
export enum TransactionProvider {
  CARD = 'CARD',
  CASH = 'CASH',
  PAYPAL = 'PAYPAL',
}
export interface TransactionData {
  id: string;
  amount: string;
  transactionType: TransactionType;
  transactionDate: string;
  transactionProvider: TransactionProvider;
  transactionDesctription: string;
}

export interface TransactionState {
  isLoading: boolean;
  error: string;
  data: TransactionData[] | null;
}

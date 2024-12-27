import {
  TransactionData,
  TransactionProvider,
  TransactionType,
} from '@/features/Transactions';
import { v4 as uuid } from 'uuid';

export const transactionMockResponse: TransactionData[] = [
  {
    id: uuid(),
    amount: '$2,500',
    transactionType: TransactionType.DEPOSIT,
    transactionDate: '28 January 2021',
    transactionProvider: TransactionProvider.CARD,
    transactionDesctription: 'Deposit from my Card',
  },
  {
    id: uuid(),
    amount: '$2,500',
    transactionType: TransactionType.WITHDRAW,
    transactionDate: '28 January 2021',
    transactionProvider: TransactionProvider.CASH,
    transactionDesctription: 'Withdrawn Cash',
  },
  {
    id: uuid(),
    amount: '$2,500',
    transactionType: TransactionType.DEPOSIT,
    transactionDate: '28 January 2021',
    transactionProvider: TransactionProvider.PAYPAL,
    transactionDesctription: 'Deposit from Paypal',
  },
  {
    id: uuid(),
    amount: '$2,500',
    transactionType: TransactionType.WITHDRAW,
    transactionDate: '28 January 2021',
    transactionProvider: TransactionProvider.CASH,
    transactionDesctription: 'Withdrawan Cash',
  },
];

import { ExpenseStatsData } from '@/features/ExpenseStatistics';
import { v4 as uuid } from 'uuid';

export const expenseStatsMockresponse: ExpenseStatsData[] = [
  {
    id: uuid(),
    category: 'Groceries',
    amount: 1500,
  },
  {
    id: uuid(),
    category: 'Clothing',
    amount: 1000,
  },
  {
    id: uuid(),
    category: 'Entertainment',
    amount: 1500,
  },
  {
    id: uuid(),
    category: 'Food',
    amount: 2000,
  },
  {
    id: uuid(),
    category: 'Travel',
    amount: 2500,
  },
];

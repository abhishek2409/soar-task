import { CardData, CardProviderType, CardTheme } from '@/features/MyCards';
import { v4 as uuid } from 'uuid';

export const myCardsMockResponse: CardData[] = [
  {
    id: uuid(),
    balance: '$1,000',
    cardHolderName: 'John Doe',
    expiryDate: '12/31',
    cardNumber: '3778 **** **** 1234',
    cardProviderType: CardProviderType.VISA,
    theme: CardTheme.DARK,
  },
  {
    id: uuid(),
    balance: '$2,000',
    cardHolderName: 'Jane Smith',
    expiryDate: '06/30',
    cardNumber: '3778 **** **** 1234',
    cardProviderType: CardProviderType.MASTERCARD,
    theme: CardTheme.LIGHT,
  },
  {
    id: uuid(),
    balance: '$3,000',
    cardHolderName: 'Bob Johnson',
    expiryDate: '08/31',
    cardNumber: '3778 **** **** 1234',
    cardProviderType: CardProviderType.MASTERCARD,
    theme: CardTheme.DARK,
  },
];

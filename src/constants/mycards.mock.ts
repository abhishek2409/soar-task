import { CardData, CardProviderType, CardTheme } from '@/features/MyCards';

export const mycardsResponse: CardData[] = [
  {
    id: '1',
    balance: '$1,000',
    cardHolderName: 'John Doe',
    expiryDate: '12/31',
    cardNumber: '3778 **** **** 1234',
    cardProviderType: CardProviderType.VISA,
    theme: CardTheme.DARK,
  },
  {
    id: '2',
    balance: '$2,000',
    cardHolderName: 'Jane Smith',
    expiryDate: '06/30',
    cardNumber: '3778 **** **** 1234',
    cardProviderType: CardProviderType.MASTERCARD,
    theme: CardTheme.LIGHT,
  },
  {
    id: '3',
    balance: '$3,000',
    cardHolderName: 'John Doe',
    expiryDate: '12/31',
    cardNumber: '3778 **** **** 1234',
    cardProviderType: CardProviderType.VISA,
    theme: CardTheme.DARK,
  },
];

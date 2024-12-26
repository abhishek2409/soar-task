export enum CardProviderType {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
}

export enum CardTheme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}
export interface CardData {
  id: string;
  balance: string;
  cardHolderName: string;
  expiryDate: string;
  cardNumber: string;
  cardProviderType: CardProviderType;
  theme: CardTheme;
}

export interface MyCardState {
  isLoading: boolean;
  error: string;
  data: CardData[];
}

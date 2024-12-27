export type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';
export interface BalanceHistoryData {
  id: string;
  balance: number;
  month: Month;
}

export interface BalanceHistoryState {
  isLoading: boolean;
  error: string;
  data: BalanceHistoryData[] | null;
}

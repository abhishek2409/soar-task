export interface ExpenseStatsData {
  id: string;
  category: string;
  amount: number;
}

export interface ExpenseStatsState {
  isLoading: boolean;
  error: string;
  data: ExpenseStatsData[] | null;
}

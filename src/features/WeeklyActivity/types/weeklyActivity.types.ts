export type Day = 'Sat' | 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

export interface WeeklyActivityData {
  id: string;
  depositAmount: number;
  withdrawAmount: number;
  day: Day;
}

export interface WeeklyActivityState {
  isLoading: boolean;
  error: string;
  data: WeeklyActivityData[] | null;
}

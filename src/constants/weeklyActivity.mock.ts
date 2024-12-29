import { WeeklyActivityData } from '@/features/WeeklyActivity';
import { v4 as uuid } from 'uuid';
export const weeklyActivityMockResponse: WeeklyActivityData[] = [
  {
    id: uuid(),
    depositAmount: 2500,
    withdrawAmount: 1200,
    day: 'Sat',
  },
  {
    id: uuid(),
    depositAmount: 250,
    withdrawAmount: 1000,
    day: 'Sun',
  },
  {
    id: uuid(),
    depositAmount: 1500,
    withdrawAmount: 500,
    day: 'Mon',
  },
  {
    id: uuid(),
    depositAmount: 2500,
    withdrawAmount: 1200,
    day: 'Tue',
  },
  {
    id: uuid(),
    depositAmount: 1000,
    withdrawAmount: 120,
    day: 'Wed',
  },
  {
    id: uuid(),
    depositAmount: 500,
    withdrawAmount: 200,
    day: 'Thu',
  },
  {
    id: uuid(),
    depositAmount: 200,
    withdrawAmount: 100,
    day: 'Fri',
  },
];

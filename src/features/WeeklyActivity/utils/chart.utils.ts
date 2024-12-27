import { ChartData } from 'chart.js';
import { WeeklyActivityData } from '../types';

export const getModifiedChartData = (
  data: WeeklyActivityData[]
): ChartData<'bar', (number | [number, number] | null)[], unknown> => {
  const labels = data.map((item) => item.day);
  const depositData = data.map((item) => item.depositAmount);
  const withdrawData = data.map((item) => item.withdrawAmount);
  return {
    labels,
    datasets: [
      {
        label: 'Deposit',
        data: depositData,
        backgroundColor: '#396AFF',
        borderRadius: 30,
        borderSkipped: 'middle',
        categoryPercentage: 0.5,
        barPercentage: 0.6,
      },
      {
        label: 'Withdraw',
        data: withdrawData,
        backgroundColor: '#232323',
        borderRadius: 30,
        borderSkipped: 'middle',
        categoryPercentage: 0.5,
        barPercentage: 0.6,
      },
    ],
  };
};

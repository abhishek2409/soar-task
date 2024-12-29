import { ChartData } from 'chart.js';
import { ExpenseStatsData } from '../types';

const COLORS = [
  '#343C6A',
  '#FC7900',
  '#396AFF',
  '#232323',
  '#FF00FF',
  '#00FF00',
];

export const getModifiedPieChartData = (
  data: ExpenseStatsData[]
): ChartData<'pie', number[], unknown> => {
  const labels = data.map((item) => item.category);
  const amount = data.map((item) => item.amount);

  return {
    labels,
    datasets: [
      {
        data: amount,
        backgroundColor: COLORS,
        offset: 30,
        hoverOffset: 40,
        borderJoinStyle: 'round',
        clip: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        },
      },
    ],
  };
};

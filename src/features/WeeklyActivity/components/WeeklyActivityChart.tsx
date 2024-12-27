import { FC, useMemo } from 'react';
import { WeeklyActivityData } from '../types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  BarControllerChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'node_modules/chart.js/dist/types/utils';
import { getModifiedChartData } from '../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options:
  | _DeepPartialObject<
      CoreChartOptions<'bar'> &
        ElementChartOptions<'bar'> &
        PluginChartOptions<'bar'> &
        DatasetChartOptions<'bar'> &
        ScaleChartOptions<'bar'> &
        BarControllerChartOptions
    >
  | undefined = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#718EBF',
        font: {
          size: 15,
          family: 'Inter',
        },
        boxWidth: 10,
        boxHeight: 10,
        usePointStyle: true,
      },
      align: 'end',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
};

interface WeeklyActivityChartProps {
  data: WeeklyActivityData[];
}
const WeeklyActivityChart: FC<WeeklyActivityChartProps> = ({ data }) => {
  //   const chartData = useMemo(() => getModifiedChartData(data), [data]);
  const chartData = getModifiedChartData(data);
  return <Bar options={options} data={chartData} />;
};

export default WeeklyActivityChart;

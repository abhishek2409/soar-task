import { FC } from 'react';
import { BalanceHistoryData } from '../types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  LineControllerChartOptions, // 1. Import Filler plugin
} from 'chart.js';
import { getModifiedAreaChartData } from '../utils';
import { _DeepPartialObject } from 'node_modules/chart.js/dist/types/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);

export const options: _DeepPartialObject<
  CoreChartOptions<'line'> &
    ElementChartOptions<'line'> &
    PluginChartOptions<'line'> &
    DatasetChartOptions<'line'> &
    ScaleChartOptions<'line'> &
    LineControllerChartOptions & { tension: number }
> = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
};

interface BalanceHistoryChartProps {
  data: BalanceHistoryData[];
}

const BalanceHistoryChart: FC<BalanceHistoryChartProps> = ({ data }) => {
  const chartData = getModifiedAreaChartData(data);
  return <Line options={options} data={chartData} />;
};

export default BalanceHistoryChart;

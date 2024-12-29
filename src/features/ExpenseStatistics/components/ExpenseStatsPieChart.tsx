import { ExpenseStatsData } from '../types';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getModifiedPieChartData } from '../utils';
import { _DeepPartialObject } from 'node_modules/chart.js/dist/types/utils';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options:
  | _DeepPartialObject<
      CoreChartOptions<'pie'> &
        ElementChartOptions<'pie'> &
        PluginChartOptions<'pie'> &
        DatasetChartOptions<'pie'> &
        ScaleChartOptions<'pie'> &
        DoughnutControllerChartOptions
    >
  | undefined = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      align: 'end',
      display: true,
      color: 'white',
      font: {
        weight: 'bold',
        // size: 16,
      },
      textAlign: 'center',
      formatter: (value, context: Context) => {
        const dataset = context.dataset.data;
        const totalValue = dataset.reduce((a, b) => a + b, 0);
        const percentage = (value / totalValue) * 100;
        const roundedPercentage = Math.round(percentage * 100) / 100;
        return (
          roundedPercentage +
          '%' +
          '\n' +
          context?.chart?.data?.labels?.[context.dataIndex]
        );
      },
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const plugins = [ChartDataLabels];

const ExpenseStatsPieChart = ({ data }: { data: ExpenseStatsData[] }) => {
  const modifiedData = getModifiedPieChartData(data);
  return <Pie data={modifiedData} options={options} plugins={plugins} />;
};

export default ExpenseStatsPieChart;
